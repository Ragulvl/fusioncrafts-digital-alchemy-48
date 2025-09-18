import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden fusion-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 fusion-orb animate-float" />
      <div className="absolute bottom-32 right-20 fusion-orb animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 fusion-orb animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card mb-8 px-4 py-2 animate-slide-in-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Premium Digital Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-up">
            <span className="text-gradient-primary">Smartly Crafted</span>
            <br />
            <span className="text-foreground">Digital Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-up">
            We blend creativity, technology, and innovation to craft exceptional digital experiences 
            that make your audience say "WOW!"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-in-up">
            <Link to="/get-started">
              <Button 
                size="lg" 
                className="group px-8 py-4 bg-primary hover:bg-primary/90 animate-fusion-glow"
              >
                Build With Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 glass-card border-primary/30 hover:bg-primary/10"
              >
                See How We Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-in-up">
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-gradient-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-gradient-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-gradient-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;