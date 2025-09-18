import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const AboutPage = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={onAdminClick} />
      <About />
      <Footer />
      <AIChat />
    </div>
  );
};

export default AboutPage;