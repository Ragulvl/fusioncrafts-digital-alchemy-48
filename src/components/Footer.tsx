import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fusionLogo from '@/assets/fusioncraft-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Web Development',
        'Software Solutions',
        'UI/UX Design', 
        'Branding',
        'Database Design',
        'Consultation'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Portfolio',
        'Testimonials',
        'Blog',
        'Careers'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Case Studies',
        'Documentation',
        'Support Center',
        'Community',
        'Developer API',
        'Status Page'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
        'GDPR Compliance',
        'Security',
        'Accessibility'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-br from-fusion-deep-blue/95 to-fusion-steel-grey/90 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={fusionLogo} alt="FusionCrafts" className="h-10 w-auto" />
              <span className="font-orbitron text-2xl font-bold">
                FusionCrafts
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Smartly crafted digital solutions that transform businesses and create 
              extraordinary user experiences. We blend creativity, technology, and 
              innovation to make your audience say "WOW!"
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@fusioncrafts.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Tech Hub, Cyber City, Gurugram, Haryana 122002</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
                >
                  <social.icon className="h-4 w-4 group-hover:text-accent transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-orbitron font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-8">
          <div className="glass-card p-6 text-center">
            <h3 className="font-orbitron font-semibold text-xl mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates, tips, and insights 
              about digital innovation.
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <Button className="px-6 py-2 bg-accent hover:bg-accent/90 rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} FusionCrafts. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                Cookies
              </a>
            </div>
            
            <div className="text-gray-300 text-sm">
              This website is proudly built by{' '}
              <span className="text-accent font-medium">FusionCrafts</span>
              {' '}— crafted to make you say WOW.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;