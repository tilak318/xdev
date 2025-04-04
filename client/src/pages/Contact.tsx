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
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Have a question or want to work with us? Get in touch with our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to discuss your project? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                      <Mail className="h-6 w-6 text-secondary group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-1">Email</h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">info@xdevsolutions.com</p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">support@xdevsolutions.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                      <Phone className="h-6 w-6 text-secondary group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-1">Phone</h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">+1 (555) 123-4567</p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">+1 (555) 765-4321</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-secondary group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-1">Location</h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">123 Innovation Drive</p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                      <Clock className="h-6 w-6 text-secondary group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors duration-500 mb-1">Business Hours</h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
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

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
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
