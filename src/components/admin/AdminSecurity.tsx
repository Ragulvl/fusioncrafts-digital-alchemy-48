import { Shield, AlertTriangle, CheckCircle, Key, Lock, Eye, Users, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AdminSecurity = () => {
  const securityScore = 85;

  const securityMetrics = [
    { name: 'SSL Certificate', status: 'Valid', expiry: '2024-12-15', icon: Lock, color: 'text-green-600' },
    { name: 'Firewall', status: 'Active', rules: '47 rules', icon: Shield, color: 'text-blue-600' },
    { name: 'Two-Factor Auth', status: 'Enabled', users: '23 users', icon: Key, color: 'text-purple-600' },
    { name: 'Access Control', status: 'Active', permissions: '12 roles', icon: Users, color: 'text-orange-600' },
  ];

  const securityEvents = [
    {
      timestamp: '2024-01-15 14:35:22',
      type: 'Login Attempt',
      severity: 'low',
      message: 'Successful admin login from IP 192.168.1.100',
      action: 'Allowed'
    },
    {
      timestamp: '2024-01-15 14:32:15',
      type: 'Failed Login',
      severity: 'medium',
      message: 'Failed login attempt from IP 45.67.89.123',
      action: 'Blocked'
    },
    {
      timestamp: '2024-01-15 14:28:08',
      type: 'Firewall',
      severity: 'high',
      message: 'Suspicious port scan detected from IP 123.45.67.89',
      action: 'Blocked'
    },
    {
      timestamp: '2024-01-15 14:25:45',
      type: 'Rate Limit',
      severity: 'medium',
      message: 'Rate limit exceeded for API endpoint /api/users',
      action: 'Throttled'
    },
    {
      timestamp: '2024-01-15 14:20:33',
      type: 'SSL Update',
      severity: 'low',
      message: 'SSL certificate renewed successfully',
      action: 'Completed'
    }
  ];

  const vulnerabilities = [
    {
      id: 'VUL-001',
      title: 'Outdated Dependencies',
      severity: 'Medium',
      description: '5 npm packages have security updates available',
      status: 'Open',
      cve: 'CVE-2024-0001'
    },
    {
      id: 'VUL-002',
      title: 'Weak Password Policy',
      severity: 'Low',
      description: 'Password policy does not enforce special characters',
      status: 'In Progress',
      cve: null
    },
    {
      id: 'VUL-003',
      title: 'Missing Security Headers',
      severity: 'Medium',
      description: 'X-Frame-Options header not configured',
      status: 'Resolved',
      cve: null
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'valid':
      case 'active':
      case 'enabled':
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>;
      case 'in progress':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{status}</Badge>;
      case 'open':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>;
      case 'expired':
      case 'disabled':
        return <Badge variant="destructive">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Security Center</h2>
          <p className="text-muted-foreground">Monitor and manage system security</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Run Scan</Button>
          <Button>Security Report</Button>
        </div>
      </div>

      {/* Security Score */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-lg">Security Score</h3>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{securityScore}/100</div>
            <div className="text-sm text-muted-foreground">Overall Security</div>
          </div>
        </div>
        <Progress value={securityScore} className="h-3" />
        <div className="mt-4 text-sm text-muted-foreground">
          Your system has a good security posture. Address the medium-priority vulnerabilities to improve your score.
        </div>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span>Security Events</span>
          </TabsTrigger>
          <TabsTrigger value="vulnerabilities" className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Vulnerabilities</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Security Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                    {getStatusBadge(metric.status)}
                  </div>
                  <h3 className="font-semibold mb-2">{metric.name}</h3>
                  <div className="text-sm text-muted-foreground">
                    {metric.expiry && `Expires: ${metric.expiry}`}
                    {metric.rules && metric.rules}
                    {metric.users && metric.users}
                    {metric.permissions && metric.permissions}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Security Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">Active Protections</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">DDoS Protection</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Malware Scanner</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Intrusion Detection</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Web Application Firewall</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">Network Security</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Open Ports</span>
                  <span className="text-sm font-medium">3 (22, 80, 443)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Blocked IPs</span>
                  <span className="text-sm font-medium">127 this month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Failed Logins</span>
                  <span className="text-sm font-medium">23 this week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">VPN Connections</span>
                  <span className="text-sm font-medium">5 active</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card className="glass-card">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Recent Security Events</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button variant="outline" size="sm">Export</Button>
                  <Button size="sm">Refresh</Button>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="space-y-0">
                {securityEvents.map((event, index) => (
                  <div key={index} className="p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between space-x-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          {getSeverityBadge(event.severity)}
                          <span className="text-sm font-medium">{event.type}</span>
                          <span className="text-sm text-muted-foreground">{event.timestamp}</span>
                        </div>
                        <p className="text-sm mb-2">{event.message}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">Action:</span>
                          <Badge variant="outline" className="text-xs">{event.action}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="vulnerabilities" className="space-y-6">
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              {vulnerabilities.filter(v => v.status === 'Open').length} active vulnerabilities require attention.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {vulnerabilities.map((vulnerability) => (
              <Card key={vulnerability.id} className="glass-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{vulnerability.title}</h3>
                      {getSeverityBadge(vulnerability.severity)}
                      {getStatusBadge(vulnerability.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{vulnerability.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-muted-foreground">ID: {vulnerability.id}</span>
                      {vulnerability.cve && (
                        <span className="text-muted-foreground">CVE: {vulnerability.cve}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    {vulnerability.status === 'Open' && (
                      <Button size="sm">Fix Now</Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSecurity;