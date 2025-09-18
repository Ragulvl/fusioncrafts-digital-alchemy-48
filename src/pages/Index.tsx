import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Index = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={onAdminClick} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
