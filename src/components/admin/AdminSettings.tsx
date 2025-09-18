import { useState } from 'react';
import { Settings, User, Bell, Shield, Palette, Database, Mail, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";

const AdminSettings = () => {
  const [hasChanges, setHasChanges] = useState(false);

  const handleSaveChanges = () => {
    // Here you would typically save to a backend
    toast.success('Settings saved successfully!');
    setHasChanges(false);
  };

  const handleResetToDefault = () => {
    if (confirm('Are you sure you want to reset all settings to default values? This action cannot be undone.')) {
      // Here you would reset all form fields to default values
      toast.success('Settings reset to default values!');
      setHasChanges(false);
    }
  };

  const handleInputChange = () => {
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Settings Panel</h2>
          <p className="text-muted-foreground">Configure system and application settings</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleResetToDefault}>Reset to Default</Button>
          <Button onClick={handleSaveChanges} disabled={!hasChanges}>
            Save Changes {hasChanges && '*'}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
          <TabsTrigger value="general" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center space-x-2">
            <Palette className="h-4 w-4" />
            <span>Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Company Information */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Company Information</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="FusionCraft Technologies" onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Primary Email</Label>
                  <Input id="company-email" type="email" defaultValue="admin@fusioncraft.com" onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Phone Number</Label>
                  <Input id="company-phone" defaultValue="+91 98765 43210" onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Address</Label>
                  <Textarea id="company-address" rows={3} defaultValue="123 Tech Park, Innovation Street, Mumbai, India 400001" />
                </div>
              </div>
            </Card>

            {/* System Configuration */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">System Configuration</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="asia-kolkata">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-kolkata">Asia/Kolkata (IST)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="america-new-york">America/New_York (EST)</SelectItem>
                      <SelectItem value="europe-london">Europe/London (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <div className="text-sm text-muted-foreground">Enable maintenance mode for updates</div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>
          </div>

          {/* Website Settings */}
          <Card className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Website Settings</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Site Title</Label>
                  <Input id="site-title" defaultValue="FusionCraft - Web Development Agency" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Meta Description</Label>
                  <Textarea id="site-description" rows={3} defaultValue="Professional web development services for modern businesses. Custom solutions, responsive design, and cutting-edge technology." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Form Email</Label>
                  <Input id="contact-email" type="email" defaultValue="contact@fusioncraft.com" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="google-analytics">Google Analytics ID</Label>
                  <Input id="google-analytics" placeholder="GA-XXXXXXXXX-X" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook-pixel">Facebook Pixel ID</Label>
                  <Input id="facebook-pixel" placeholder="123456789012345" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cookie Consent</Label>
                    <div className="text-sm text-muted-foreground">Show cookie consent banner</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Theme Settings */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Theme & Branding</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Color Scheme</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border-2 border-primary bg-background">
                      <div className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-2"></div>
                      <div className="text-xs text-center">Default</div>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-border bg-background hover:border-primary cursor-pointer">
                      <div className="w-full h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded mb-2"></div>
                      <div className="text-xs text-center">Green</div>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-border bg-background hover:border-primary cursor-pointer">
                      <div className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded mb-2"></div>
                      <div className="text-xs text-center">Orange</div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex space-x-2">
                    <Input id="primary-color" defaultValue="#3b82f6" className="flex-1" />
                    <div className="w-10 h-10 bg-blue-500 rounded border"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex space-x-2">
                    <Input id="secondary-color" defaultValue="#8b5cf6" className="flex-1" />
                    <div className="w-10 h-10 bg-purple-500 rounded border"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <div className="text-sm text-muted-foreground">Enable dark theme by default</div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Layout Settings */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Settings className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Layout Settings</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Navigation Style</Label>
                  <Select defaultValue="modern">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern Glass</SelectItem>
                      <SelectItem value="classic">Classic Solid</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Footer Style</Label>
                  <Select defaultValue="full">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Footer</SelectItem>
                      <SelectItem value="minimal">Minimal Footer</SelectItem>
                      <SelectItem value="centered">Centered Footer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Animations</Label>
                    <div className="text-sm text-muted-foreground">Enable page transitions and animations</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Custom Cursor</Label>
                    <div className="text-sm text-muted-foreground">Enable custom cursor effects</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Email Notifications */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Email Notifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Contact Form Submissions</Label>
                    <div className="text-sm text-muted-foreground">Get notified when someone submits a contact form</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Project Updates</Label>
                    <div className="text-sm text-muted-foreground">Receive updates on project status changes</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Alerts</Label>
                    <div className="text-sm text-muted-foreground">Critical system notifications and errors</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <div className="text-sm text-muted-foreground">Weekly analytics and performance reports</div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Push Notifications */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Bell className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Push Notifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Browser Notifications</Label>
                    <div className="text-sm text-muted-foreground">Show notifications in browser</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Sound Alerts</Label>
                    <div className="text-sm text-muted-foreground">Play sound for important notifications</div>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label>Notification Frequency</Label>
                  <Select defaultValue="immediate">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="hourly">Hourly Digest</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Digest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Authentication Settings */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Authentication & Access</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                  <Input id="max-login-attempts" type="number" defaultValue="5" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <div className="text-sm text-muted-foreground">Require 2FA for admin access</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>IP Whitelisting</Label>
                    <div className="text-sm text-muted-foreground">Restrict admin access to specific IPs</div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Security Policies */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Security Policies</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Password Policy</Label>
                  <Select defaultValue="strong">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                      <SelectItem value="strong">Strong (8+ chars, numbers, symbols)</SelectItem>
                      <SelectItem value="very-strong">Very Strong (12+ chars, mixed case, numbers, symbols)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                  <Input id="password-expiry" type="number" defaultValue="90" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>HTTPS Only</Label>
                    <div className="text-sm text-muted-foreground">Force HTTPS for all connections</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Security Headers</Label>
                    <div className="text-sm text-muted-foreground">Enable security headers (HSTS, CSP, etc.)</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;