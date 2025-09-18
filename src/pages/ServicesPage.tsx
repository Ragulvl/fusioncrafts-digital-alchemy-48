import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const ServicesPage = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={onAdminClick} />
      <Services />
      <Footer />
      <AIChat />
    </div>
  );
};

export default ServicesPage;