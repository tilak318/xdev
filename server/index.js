const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: ['https://xdevsolutions.com','https://xdev.onrender.com', 'http://localhost:8080'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware with options
app.use(cors(corsOptions));
app.use(express.json());

// Pre-flight requests
app.options('*', cors(corsOptions));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Hostinger SMTP server
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Your Hostinger email
    pass: process.env.EMAIL_PASS  // Your Hostinger email password
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
  retryWrites: true,
  ssl: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Add connection status listeners
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.on('connected', () => {
  console.log(`MongoDB connected on host: ${mongoose.connection.host}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Function to send email
const sendEmail = async (contactData) => {
  const { name, email, phone, subject, message } = contactData;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'contact@xdevsolutions.com',
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message}</p>
      <hr>
      <p>This email was sent from your website's contact form.</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Health Check Route
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  
  const healthStatus = {
    server: 'healthy',
    timestamp: new Date().toISOString(),
    mongodb: dbStatus === 1 ? 'connected' : 'disconnected',
    status: dbStatus === 1 ? 'ok' : 'error'
  };

  if (healthStatus.status === 'ok') {
    console.log('API Health Check: API is healthy');
    return res.status(200).json(healthStatus);
  } else {
    console.error('API Health Check: Error connecting to server or database');
    return res.status(503).json(healthStatus);
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    const { name, email, phone, subject, message } = req.body;
    
    // Save to database
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    
    // Send email
    await sendEmail(req.body);
    
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
});

// Optional: Get all contacts route (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
