import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const PortfolioPage = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={onAdminClick} />
      <Portfolio />
      <Footer />
      <AIChat />
    </div>
  );
};

export default PortfolioPage;