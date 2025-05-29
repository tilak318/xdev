import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { checkApiHealth, getApiBaseUrl } from "@/lib/utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import { MobileMenuProvider, useMobileMenu } from "./context/MobileMenuContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isMobileMenuOpen } = useMobileMenu();

  // Perform API health check when component mounts
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const baseUrl = getApiBaseUrl();
        console.log(`Checking API health at ${baseUrl}/api/health`);
        const healthStatus = await checkApiHealth();
        console.log('API Health Status:', healthStatus);
      } catch (error) {
        console.error('Failed to check API health:', error);
      }
    };
    
    checkHealth();
    
    // Set up interval to check health every 5 minutes
    const healthInterval = setInterval(checkHealth, 5 * 60 * 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(healthInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col">
      <Navbar />
      <div className={`flex-grow pt-16 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <MobileMenuProvider>
          <AppContent />
        </MobileMenuProvider>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;