import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import fusionLogo from '@/assets/fusioncraft-logo.png';

const Navbar = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <nav className="navbar-glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={fusionLogo} alt="FusionCrafts" className="h-8 w-auto" />
            <span className="font-orbitron text-xl font-bold text-gradient-primary">
              FusionCrafts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent animate-fusion-glow" />
                )}
              </Link>
            ))}
            <Link to="/get-started">
              <Button variant="outline" size="sm" className="glass-card border-primary/20 hover:bg-primary/10">
                Get Started
              </Button>
            </Link>
            {import.meta.env.DEV && onAdminClick && (
              <Button
                onClick={onAdminClick}
                variant="outline"
                size="sm"
                className="glass-card border-accent/20 hover:bg-accent/10"
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/get-started" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full mt-2 glass-card">
                  Get Started
                </Button>
              </Link>
              {import.meta.env.DEV && onAdminClick && (
                <Button
                  onClick={() => {
                    onAdminClick();
                    setIsOpen(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 glass-card border-accent/20 hover:bg-accent/10"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Admin Panel
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;