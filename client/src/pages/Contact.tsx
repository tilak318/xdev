import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      title: "Email",
      content: "contact@xdevsolutions.com",
      icon: "📧",
    },
    {
      title: "Phone",
      content: "+1 (555) 123-4567",
      icon: "📞",
    },
    {
      title: "Address",
      content: "123 Tech Street, Digital City, DC 12345",
      icon: "📍",
    },
    {
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      icon: "⏰",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 relative inline-block">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to discuss your project? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                    <span className="text-2xl text-secondary group-hover:text-primary transition-colors duration-500">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-1">{info.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">First Name</Label>
                  <Input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Last Name</Label>
                  <Input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Email</Label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50 h-32 resize-none"
                  placeholder="Your message..."
                ></Textarea>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:from-secondary hover:to-primary transition-all duration-500 group shadow-lg hover:shadow-xl"
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
