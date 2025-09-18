import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fusionLogo from '@/assets/fusioncraft-logo.png';

interface AdminLoginProps {
  onLogin: (credentials: { username: string; password: string }) => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'fusion2024') {
      onLogin(credentials);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="w-full max-w-md">
        <div className="glass-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <img src={fusionLogo} alt="FusionCrafts" className="h-12 w-auto mx-auto mb-4" />
            <h1 className="font-orbitron text-2xl font-bold text-gradient-primary mb-2">
              Super Admin Portal
            </h1>
            <p className="text-muted-foreground">
              Restricted access - Authorized personnel only
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={e => setCredentials({
                  ...credentials,
                  username: e.target.value
                })}
                className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter username"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={e => setCredentials({
                  ...credentials,
                  password: e.target.value
                })}
                className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter password"
                required
              />
            </div>

            <Button type="submit" className="w-full py-3 bg-primary hover:bg-primary/90">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In as Super Admin
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Demo credentials: <strong>admin</strong> / <strong>fusion2024</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;