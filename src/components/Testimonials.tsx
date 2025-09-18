import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
      content: "FusionCrafts transformed our digital presence completely. Their attention to detail and innovative approach made our website exactly what we envisioned. The team's expertise is unmatched!",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Working with FusionCrafts was a game-changer for our healthcare platform. They delivered a robust, secure, and scalable solution that exceeded our expectations. Highly recommended!",
      rating: 5,
      project: "Healthcare Management System"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, FinanceFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The financial dashboard FusionCrafts created for us is phenomenal. The real-time data visualization and intuitive design have improved our decision-making process significantly.",
      rating: 5,
      project: "Financial Dashboard"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder, StartupLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "FusionCrafts didn't just build us a website; they crafted a digital experience that truly represents our brand. The attention to detail and creative solutions were outstanding.",
      rating: 5,
      project: "Brand Identity & Website"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "VP Technology, DataCore",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      content: "The AI-powered analytics platform developed by FusionCrafts has revolutionized how we handle business intelligence. Their technical expertise and innovative approach are impressive.",
      rating: 5,
      project: "AI Analytics Platform"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-fusion-deep-blue/10 to-fusion-bright-blue/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with FusionCrafts.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card relative p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="h-6 w-6 text-primary" />
            </div>

            {/* Navigation */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="mt-8">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 min-h-[120px] flex items-center">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-orbitron font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-accent font-medium">
                    Project: {testimonials[currentTestimonial].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 p-0 ${
                  index === currentTestimonial 
                    ? 'bg-primary hover:bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center glass-card">
            <div className="font-orbitron text-2xl font-bold text-gradient-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center glass-card">
            <div className="font-orbitron text-2xl font-bold text-gradient-primary">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center glass-card">
            <div className="font-orbitron text-2xl font-bold text-gradient-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center glass-card">
            <div className="font-orbitron text-2xl font-bold text-gradient-primary">100%</div>
            <div className="text-sm text-muted-foreground">Project Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;