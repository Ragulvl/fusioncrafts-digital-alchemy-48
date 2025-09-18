import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fusionLogo from '@/assets/fusioncraft-logo.png';

interface AdminHeaderProps {
  onSignOut: () => void;
}

const AdminHeader = ({ onSignOut }: AdminHeaderProps) => {
  return (
    <header className="navbar-glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 mx-[19px]">
          <div className="flex items-center space-x-3">
            <img src={fusionLogo} alt="FusionCrafts" className="h-8 w-auto" />
            <div>
              <span className="font-orbitron text-lg font-bold text-gradient-primary">
                FusionCrafts
              </span>
              <span className="ml-2 text-sm text-muted-foreground">Super Admin Panel</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* System Status Indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">System Healthy</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Welcome back,</span>
              <span className="font-medium ml-1">Super Administrator</span>
            </div>
            <Button variant="outline" size="sm" onClick={onSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;