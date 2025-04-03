
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4 relative inline-block">
            Contact Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work with us? Get in touch with our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Contact Information */}
          <div className="md:col-span-5">
            <div className="space-y-8">
              <h2 className="text-2xl font-montserrat font-semibold text-primary">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex items-start p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Email</h3>
                        <p className="text-gray-600">info@xdevsolutions.com</p>
                        <p className="text-gray-600">support@xdevsolutions.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex items-start p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 765-4321</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex items-start p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Location</h3>
                        <p className="text-gray-600">123 Innovation Drive</p>
                        <p className="text-gray-600">San Francisco, CA 94105</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex items-start p-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-montserrat font-semibold text-primary mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-secondary/50 hover:border-secondary/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-secondary/50 hover:border-secondary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-secondary/50 hover:border-secondary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project, needs, and timeline..."
                      rows={5}
                      required
                      className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-secondary/50 hover:border-secondary/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
          <p className="text-lg font-medium text-gray-500">Interactive Map will be embedded here</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">xDev Solutions</h3>
              <p className="text-gray-300 mb-4">
                Innovative IT solutions for businesses of all sizes. We specialize in custom software development, 
                AI integration, and digital transformation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">About Us</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Services</a>
                </li>
                <li>
                  <a href="/portfolio" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Portfolio</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Contact</a>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Web Development</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Mobile Applications</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">AI Solutions</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">Cloud Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1">IT Consulting</a>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest news and updates.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-secondary/50 hover:border-secondary/50"
                />
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 hover:shadow-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} xDev Solutions. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
