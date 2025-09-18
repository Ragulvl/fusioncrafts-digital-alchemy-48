import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const ContactPage = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={onAdminClick} />
      <Contact />
      <Footer />
      <AIChat />
    </div>
  );
};

export default ContactPage;