import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fusionLogo from '@/assets/fusioncraft-logo.png';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm FusionCrafts AI Assistant. How can I help you today? I can answer questions about our services, provide project estimates, or help you get started with your digital transformation.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    "Tell me about your services",
    "Request a project quote",
    "Portfolio examples",
    "Contact information",
    "Technology expertise"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer a comprehensive range of digital services including:\n\n• Web Development (React, Next.js, Node.js)\n• Software Solutions (Custom applications, APIs)\n• UI/UX Design (User research, prototyping)\n• Branding (Logo design, brand identity)\n• Database Design & Optimization\n• Technical Consultation\n\nWhich service interests you most?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "Our pricing depends on the project scope and requirements. Here's a general range:\n\n• Website Development: ₹1,60,000 - ₹12,00,000\n• Custom Software: ₹4,00,000 - ₹40,00,000\n• UI/UX Design: ₹1,20,000 - ₹6,40,000\n• Branding Package: ₹80,000 - ₹4,00,000\n\nI'd love to provide a detailed quote! Could you tell me more about your specific needs?";
    }
    
    if (message.includes('portfolio') || message.includes('examples') || message.includes('work')) {
      return "We've successfully delivered 100+ projects! Some highlights include:\n\n• E-commerce platforms handling 10,000+ products\n• Healthcare management systems for 50+ facilities\n• Financial dashboards with real-time analytics\n• AI-powered business intelligence platforms\n• Complete brand identity packages\n\nYou can view our full portfolio on the website. Which type of project interests you?";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('talk')) {
      return "I'd love to connect you with our team! Here are the best ways to reach us:\n\n📧 Email: hello@fusioncrafts.com\n📞 Phone: +91 98765 43210\n💬 Or continue chatting here!\n\nWould you like to schedule a consultation call to discuss your project in detail?";
    }
    
    if (message.includes('technology') || message.includes('tech') || message.includes('stack')) {
      return "We work with cutting-edge technologies:\n\n🚀 Frontend: React, Next.js, Vue.js, TypeScript\n⚡ Backend: Node.js, Python, PostgreSQL, MongoDB\n☁️ Cloud: AWS, Google Cloud, Docker\n🎨 Design: Figma, Adobe Creative Suite\n🔧 Tools: Git, CI/CD, Testing frameworks\n\nWe always choose the best technology stack for your specific needs. What's your project about?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! 👋\n\nI'm here to help you learn about FusionCrafts and how we can bring your digital vision to life. Whether you're looking for web development, software solutions, or complete digital transformation, we've got you covered.\n\nWhat brings you here today?";
    }
    
    return "That's a great question! While I can help with general information about FusionCrafts, I'd recommend speaking directly with our team for detailed technical discussions.\n\nYou can:\n• Browse our portfolio section\n• Check out our services\n• Contact us directly for a consultation\n\nIs there anything specific about our services you'd like to know more about?";
  };

  const handleSendMessage = async (messageContent?: string) => {
    const content = messageContent || inputMessage.trim();
    if (!content) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl animate-fusion-glow group"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <Sparkles className="h-2 w-2 text-white" />
            </div>
          </div>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-96 h-[600px] glass rounded-2xl shadow-2xl flex flex-col animate-slide-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <img src={fusionLogo} alt="FusionCrafts AI" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-orbitron font-semibold text-sm">FusionCrafts AI</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary/20' 
                      : 'bg-gradient-to-r from-primary to-accent'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-primary" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  
                  {/* Message */}
                  <div className={`px-3 py-2 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'glass-card'
                  }`}>
                    <pre className="whitespace-pre-wrap font-inter">{message.content}</pre>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="glass-card px-3 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="text-xs text-muted-foreground mb-2">Quick suggestions:</div>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-xs px-2 py-1 glass-card hover:bg-primary/10 rounded-full transition-colors duration-200"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 glass rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="w-10 h-10 rounded-lg bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;