import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import GetStartedPage from "./pages/GetStartedPage";
import NotFound from "./pages/NotFound";
import AdminPanel from "./components/AdminPanel";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  // Check for admin access via URL parameter or keypress
  const checkAdminAccess = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('admin') === 'true';
  };

  // Listen for admin shortcut (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
        setShowAdmin(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Check if admin panel should be shown
  if (showAdmin || checkAdminAccess()) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Sonner />
          <AdminPanel />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index onAdminClick={() => setShowAdmin(true)} />} />
            <Route path="/about" element={<AboutPage onAdminClick={() => setShowAdmin(true)} />} />
            <Route path="/services" element={<ServicesPage onAdminClick={() => setShowAdmin(true)} />} />
            <Route path="/portfolio" element={<PortfolioPage onAdminClick={() => setShowAdmin(true)} />} />
            <Route path="/contact" element={<ContactPage onAdminClick={() => setShowAdmin(true)} />} />
            <Route path="/get-started" element={<GetStartedPage onAdminClick={() => setShowAdmin(true)} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
