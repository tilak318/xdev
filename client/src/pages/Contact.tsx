import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PresentationControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

// 3D Model Component for Services
function ServicesModel() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 0.5]}
    >
      <group>
        {/* Service Nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <group 
            key={i}
            position={[
              Math.cos(i * Math.PI / 3) * 2.5,
              Math.sin(i * Math.PI / 3) * 2.5,
              Math.sin(i * Math.PI / 3) * 0.5
            ]}
            rotation={[time * 0.2, time * 0.3, time * 0.1]}
          >
            {/* Node Core */}
            <mesh>
              <icosahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial 
                color="#f3f4f6"
                metalness={0.2}
                roughness={0.8}
                transparent
                opacity={0.15}
                wireframe
              />
            </mesh>
            
            {/* Connection Lines */}
            <mesh rotation={[0, i * Math.PI / 3 + time * 0.2, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
              <meshStandardMaterial 
                color="#e5e7eb"
                metalness={0.1}
                roughness={0.9}
                transparent
                opacity={0.05}
              />
            </mesh>
          </group>
        ))}

        {/* Service Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh 
            key={i}
            position={[0, 0, 0]}
            rotation={[i * Math.PI / 3, time * 0.2, 0]}
          >
            <torusGeometry args={[3 + i * 0.5, 0.02, 16, 100]} />
            <meshStandardMaterial 
              color="#e5e7eb"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.1}
            />
          </mesh>
        ))}

        {/* Service Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh 
            key={i}
            position={[
              Math.sin(i * Math.PI / 10 + time) * 4,
              Math.cos(i * Math.PI / 10 + time) * 4,
              Math.sin(i * Math.PI / 10 + time) * 0.5
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.2}
            />
          </mesh>
        ))}

        {/* Service Grid */}
        <mesh position={[0, 0, -3]} rotation={[0, time * 0.1, 0]}>
          <gridHelper args={[15, 30, '#f3f4f6', '#e5e7eb']} />
          <meshStandardMaterial 
            transparent
            opacity={0.02}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Sending data:', formData);
      // const response = await fetch('http://localhost:5000/api/contact', {
      const response = await fetch('https://xdev-server.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
  
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
  
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error); // Debug log
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ServicesModel />
            <OrbitControls enableZoom={false} />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <fog attach="fog" args={['#ffffff', 5, 20]} />
            <color attach="background" args={['#ffffff']} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Have a question or want to work with us? Get in touch with our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to discuss your project? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-gray-600">xdevsolutions@gmail.com</p>
                      {/* <p className="text-gray-600">support@xdevsolutions.com</p> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (548) 881-3773 (CANADA)</p>
                      <p className="text-gray-600">+91 82381 69574 (INDIA)</p>
                      <p className="text-gray-600">+91 98253 40963 (INDIA)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Location</h3>
                      <p className="text-gray-600">KITCHENER, ON, CANADA
                      </p>
                     
                    </div>
                  </div>
                </CardContent>
              </Card>
{/*               
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg p-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="your name"
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
                    placeholder="your email"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-secondary/50 hover:border-secondary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="your phone number"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;