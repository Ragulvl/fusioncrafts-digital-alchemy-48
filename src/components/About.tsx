import { useEffect, useState } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import aboutIllustration from '@/assets/about-illustration.jpg';

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });

  const targetValues = {
    projects: 100,
    clients: 50,
    experience: 5,
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 fps
      const stepDuration = duration / steps;
      
      Object.keys(targetValues).forEach((key) => {
        const target = targetValues[key as keyof typeof targetValues];
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    // Observer to trigger animation when component comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutIllustration} 
                alt="About FusionCrafts" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-gradient-primary">FusionCrafts</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are a team of passionate developers, designers, and innovators who believe 
                in the power of technology to transform businesses. Our mission is to create 
                digital solutions that not only meet your needs but exceed your expectations.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card">
                <Target className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-orbitron text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To craft innovative digital solutions that empower businesses and create 
                  extraordinary user experiences.
                </p>
              </div>
              
              <div className="glass-card">
                <Eye className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-orbitron text-lg font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be the leading force in digital transformation, setting new standards 
                  for excellence in web development.
                </p>
              </div>
            </div>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center glass-card">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-gradient-primary">
                  {counters.projects}+
                </div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              
              <div className="text-center glass-card">
                <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-gradient-primary">
                  {counters.clients}+
                </div>
                <div className="text-xs text-muted-foreground">Clients</div>
              </div>
              
              <div className="text-center glass-card">
                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-gradient-primary">
                  {counters.experience}+
                </div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;