import { Code, Palette, Smartphone, Zap, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and modern frameworks.",
      features: ["React & Next.js", "Node.js & Express", "Full-Stack Solutions", "API Integration"]
    },
    {
      icon: Smartphone,
      title: "Software Solutions",
      description: "Scalable software solutions tailored to your business needs and requirements.",
      features: ["Enterprise Software", "Cloud Integration", "System Architecture", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Globe,
      title: "Branding",
      description: "Complete brand identity solutions that make your business stand out.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Robust database architectures for efficient data management and scalability.",
      features: ["Database Optimization", "Data Modeling", "Migration Services", "Performance Tuning"]
    },
    {
      icon: Zap,
      title: "Consultation",
      description: "Expert technical consultation to guide your digital transformation journey.",
      features: ["Technical Audits", "Strategy Planning", "Technology Selection", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business 
            thrive in the modern digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group glass-card hover:scale-105 transition-all duration-500 hover:shadow-[0_20px_60px_0_hsl(var(--fusion-bright-blue)/0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-4 mb-6 group-hover:animate-fusion-glow">
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-primary/20 rounded-2xl blur-xl" />
                </div>

                {/* Content */}
                <h3 className="font-orbitron text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block p-8">
            <h3 className="font-orbitron text-xl font-semibold mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss your unique requirements and create something amazing together.
            </p>
            <Link to="/get-started">
              <Button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300 animate-fusion-glow">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;