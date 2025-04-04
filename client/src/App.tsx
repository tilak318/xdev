import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { MobileMenuProvider, useMobileMenu } from "./context/MobileMenuContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col">
      <Navbar />
      <div className={`flex-grow pt-16 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
      <BrowserRouter>
        <ScrollToTop />
        <MobileMenuProvider>
          <AppContent />
        </MobileMenuProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
