import { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, Users, Zap, Code, Palette, Smartphone, Globe, Database, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import { useToast } from '@/hooks/use-toast';

const GetStartedPage = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    goals: [] as string[],
    experience: ''
  });

  const projectTypes = [
    {
      id: 'new-website',
      title: 'New Website',
      description: 'Build a brand new website from scratch',
      icon: Globe,
      popular: true
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      description: 'Modernize your existing website',
      icon: Palette,
      popular: false
    },
    {
      id: 'web-app',
      title: 'Web Application',
      description: 'Custom web application development',
      icon: Code,
      popular: true
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      description: 'iOS and Android mobile applications',
      icon: Smartphone,
      popular: false
    },
    {
      id: 'software',
      title: 'Custom Software',
      description: 'Enterprise software solutions',
      icon: Database,
      popular: false
    },
    {
      id: 'branding',
      title: 'Branding Package',
      description: 'Complete brand identity design',
      icon: Target,
      popular: false
    }
  ];

  const services = [
    { id: 'web-dev', name: 'Web Development', icon: Code },
    { id: 'ui-ux', name: 'UI/UX Design', icon: Palette },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone },
    { id: 'branding', name: 'Branding & Identity', icon: Target },
    { id: 'database', name: 'Database Design', icon: Database },
    { id: 'consultation', name: 'Technical Consultation', icon: Users }
  ];

  const budgetRanges = [
    { id: 'under-5k', label: 'Under ₹4,00,000', description: 'Small projects, landing pages' },
    { id: '5k-15k', label: '₹4,00,000 - ₹12,00,000', description: 'Medium websites, basic apps' },
    { id: '15k-50k', label: '₹12,00,000 - ₹40,00,000', description: 'Complex applications, e-commerce' },
    { id: '50k-plus', label: '₹40,00,000+', description: 'Enterprise solutions, large platforms' },
    { id: 'discuss', label: 'Let\'s Discuss', description: 'Custom pricing for unique projects' }
  ];

  const timelines = [
    { id: 'asap', label: 'ASAP', description: 'Rush project (may incur additional costs)' },
    { id: '1-month', label: '1 Month', description: 'Quick turnaround for simple projects' },
    { id: '2-3-months', label: '2-3 Months', description: 'Standard timeline for most projects' },
    { id: '3-6-months', label: '3-6 Months', description: 'Complex projects with extensive features' },
    { id: '6-plus', label: '6+ Months', description: 'Large-scale enterprise solutions' }
  ];

  const projectGoals = [
    'Increase online presence',
    'Generate more leads',
    'Improve user experience',
    'Modernize existing systems',
    'Expand to mobile users',
    'Automate business processes',
    'Enhance brand identity',
    'Scale existing platform'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field: 'services' | 'goals', value: string) => {
    setFormData(prev => {
      const array = prev[field];
      const newArray = array.includes(value)
        ? array.filter(item => item !== value)
        : [...array, value];
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const handleSubmit = async () => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Project Consultation Submitted!",
        description: "We'll review your requirements and get back to you within 4 hours with a detailed proposal.",
        duration: 6000,
      });

      // Reset form
      setFormData({
        projectType: '',
        services: [],
        budget: '',
        timeline: '',
        name: '',
        email: '',
        company: '',
        phone: '',
        description: '',
        goals: [],
        experience: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 1: return !!formData.projectType;
      case 2: return formData.services.length > 0;
      case 3: return !!formData.budget && !!formData.timeline;
      case 4: return !!formData.name && !!formData.email;
      case 5: return !!formData.description && formData.goals.length > 0;
      default: return false;
    }
  };

  const canProceed = isStepComplete(currentStep);

  const nextStep = () => {
    if (canProceed && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={onAdminClick} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient-primary">Amazing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your digital transformation. Our consultation process 
              is designed to understand your needs and deliver the perfect solution.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step < currentStep ? 'bg-primary text-white' :
                    step === currentStep ? 'bg-primary text-white animate-fusion-glow' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  <span className="text-xs mt-2 font-medium">
                    {step === 1 && 'Project Type'}
                    {step === 2 && 'Services'}
                    {step === 3 && 'Budget & Timeline'}
                    {step === 4 && 'Your Details'}
                    {step === 5 && 'Project Goals'}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 min-h-[500px]">
              
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-orbitron text-2xl font-bold mb-4">What type of project do you have in mind?</h2>
                    <p className="text-muted-foreground">Choose the option that best describes your project needs.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectTypes.map((type) => (
                      <div
                        key={type.id}
                        onClick={() => handleInputChange('projectType', type.id)}
                        className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                          formData.projectType === type.id
                            ? 'border-primary bg-primary/10 shadow-lg'
                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                        }`}
                      >
                        {type.popular && (
                          <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                            Popular
                          </div>
                        )}
                        <type.icon className={`h-8 w-8 mb-4 ${
                          formData.projectType === type.id ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <h3 className="font-semibold mb-2">{type.title}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Services */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-orbitron text-2xl font-bold mb-4">Which services do you need?</h2>
                    <p className="text-muted-foreground">Select all services that apply to your project. You can choose multiple options.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleArrayToggle('services', service.id)}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                          formData.services.includes(service.id)
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <service.icon className={`h-6 w-6 ${
                            formData.services.includes(service.id) ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                          <span className="font-medium">{service.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="font-orbitron text-2xl font-bold mb-4">Budget & Timeline</h2>
                    <p className="text-muted-foreground">Help us understand your budget range and desired timeline.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-primary" />
                      What's your budget range?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {budgetRanges.map((range) => (
                        <div
                          key={range.id}
                          onClick={() => handleInputChange('budget', range.id)}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                            formData.budget === range.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-medium mb-1">{range.label}</div>
                          <div className="text-sm text-muted-foreground">{range.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      When do you need this completed?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {timelines.map((timeline) => (
                        <div
                          key={timeline.id}
                          onClick={() => handleInputChange('timeline', timeline.id)}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                            formData.timeline === timeline.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-medium mb-1">{timeline.label}</div>
                          <div className="text-sm text-muted-foreground">{timeline.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-orbitron text-2xl font-bold mb-4">Tell us about yourself</h2>
                    <p className="text-muted-foreground">We need your contact information to send you a detailed proposal.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select your experience level</option>
                      <option value="first-time">First-time client</option>
                      <option value="some-experience">Some experience with web projects</option>
                      <option value="experienced">Very experienced</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 5: Project Goals */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-orbitron text-2xl font-bold mb-4">Project Goals & Description</h2>
                    <p className="text-muted-foreground">Help us understand your vision and main objectives for this project.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Description *</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="Describe your project in detail. Include specific features, functionality, and any requirements you have in mind..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-4">What are your main goals? *</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {projectGoals.map((goal) => (
                          <div
                            key={goal}
                            onClick={() => handleArrayToggle('goals', goal)}
                            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 border ${
                              formData.goals.includes(goal)
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                formData.goals.includes(goal)
                                  ? 'border-primary bg-primary'
                                  : 'border-muted-foreground'
                              }`}>
                                {formData.goals.includes(goal) && (
                                  <CheckCircle className="h-3 w-3 text-white" />
                                )}
                              </div>
                              <span className="text-sm">{goal}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6"
                >
                  Previous
                </Button>

                <div className="text-sm text-muted-foreground">
                  Step {currentStep} of 5
                </div>

                {currentStep < 5 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed}
                    className="px-6 bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed}
                    className="px-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    Submit Consultation
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Process Overview */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="font-orbitron text-2xl font-bold text-center mb-12">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Quick Review</h4>
                <p className="text-sm text-muted-foreground">We'll review your requirements within 4 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Strategy Call</h4>
                <p className="text-sm text-muted-foreground">30-minute call to discuss your project in detail</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Detailed Proposal</h4>
                <p className="text-sm text-muted-foreground">Custom proposal with timeline and pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default GetStartedPage;