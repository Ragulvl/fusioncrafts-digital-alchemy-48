import { useState } from 'react';
import { BarChart3, FileText, Users, Settings, Shield, Database, Globe, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminLogin from './admin/AdminLogin';
import AdminHeader from './admin/AdminHeader';
import AdminDashboard from './admin/AdminDashboard';
import AdminProjects from './admin/AdminProjects';
import AdminClients from './admin/AdminClients';
import AdminTeam from './admin/AdminTeam';
import AdminSystem from './admin/AdminSystem';
import AdminSecurity from './admin/AdminSecurity';
import AdminAnalytics from './admin/AdminAnalytics';
import AdminSettings from './admin/AdminSettings';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(import.meta.env.DEV ? true : false);

  const handleLogin = (credentials: { username: string; password: string }) => {
    if (credentials.username === 'admin' && credentials.password === 'fusion2024') {
      setIsAuthenticated(true);
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader onSignOut={handleSignOut} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 pt-24">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 lg:w-auto lg:inline-flex bg-muted/50 p-1 rounded-lg border border-border">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Clients</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">System</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <AdminProjects />
          </TabsContent>

          <TabsContent value="clients" className="space-y-8">
            <AdminClients />
          </TabsContent>

          <TabsContent value="team" className="space-y-8">
            <AdminTeam />
          </TabsContent>

          <TabsContent value="system" className="space-y-8">
            <AdminSystem />
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <AdminSecurity />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <AdminAnalytics />
          </TabsContent>

          <TabsContent value="settings" className="space-y-8">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;