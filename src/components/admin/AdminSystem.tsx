import { Cpu, Database, Globe, Shield, HardDrive, Activity, Server, Wifi } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminSystem = () => {
  const systemMetrics = [
    { name: 'CPU Usage', value: 45, max: 100, unit: '%', status: 'normal', icon: Cpu },
    { name: 'Memory Usage', value: 68, max: 100, unit: '%', status: 'warning', icon: HardDrive },
    { name: 'Disk Usage', value: 32, max: 100, unit: '%', status: 'normal', icon: Database },
    { name: 'Network I/O', value: 23, max: 100, unit: 'Mbps', status: 'normal', icon: Wifi },
  ];

  const services = [
    { name: 'Web Server', status: 'Running', uptime: '15d 6h 32m', icon: Server },
    { name: 'Database', status: 'Running', uptime: '15d 6h 32m', icon: Database },
    { name: 'API Gateway', status: 'Running', uptime: '15d 6h 32m', icon: Globe },
    { name: 'Security Scanner', status: 'Running', uptime: '15d 6h 32m', icon: Shield },
    { name: 'Backup Service', status: 'Running', uptime: '12h 15m', icon: HardDrive },
    { name: 'Monitoring', status: 'Running', uptime: '15d 6h 32m', icon: Activity },
  ];

  const logs = [
    { timestamp: '2024-01-15 14:32:45', level: 'INFO', service: 'API', message: 'User authentication successful' },
    { timestamp: '2024-01-15 14:31:12', level: 'WARN', service: 'DB', message: 'High connection count detected' },
    { timestamp: '2024-01-15 14:30:08', level: 'INFO', service: 'WEB', message: 'New deployment completed successfully' },
    { timestamp: '2024-01-15 14:28:45', level: 'ERROR', service: 'API', message: 'Rate limit exceeded for IP 192.168.1.100' },
    { timestamp: '2024-01-15 14:27:32', level: 'INFO', service: 'BACKUP', message: 'Scheduled backup completed' },
    { timestamp: '2024-01-15 14:25:18', level: 'INFO', service: 'SECURITY', message: 'Security scan completed - no threats detected' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Running':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Running</Badge>;
      case 'Stopped':
        return <Badge variant="destructive">Stopped</Badge>;
      case 'Warning':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Warning</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'INFO':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">INFO</Badge>;
      case 'WARN':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">WARN</Badge>;
      case 'ERROR':
        return <Badge variant="destructive">ERROR</Badge>;
      default:
        return <Badge variant="secondary">{level}</Badge>;
    }
  };

  const getProgressColor = (value: number) => {
    if (value > 80) return 'bg-red-500';
    if (value > 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">System Management</h2>
          <p className="text-muted-foreground">Monitor system health and performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Restart Services</Button>
          <Button>System Backup</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <Activity className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center space-x-2">
            <Server className="h-4 w-4" />
            <span>Services</span>
          </TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center space-x-2">
            <Database className="h-4 w-4" />
            <span>Logs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{metric.name}</span>
                    </div>
                    <Badge variant={metric.status === 'normal' ? 'secondary' : 'destructive'}>
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{metric.value}{metric.unit}</span>
                      <span className="text-muted-foreground">{metric.max}{metric.unit}</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </Card>
              );
            })}
          </div>

          {/* System Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-4">System Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">OS Version</span>
                  <span>Ubuntu 22.04.3 LTS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kernel</span>
                  <span>5.15.0-89-generic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime</span>
                  <span>15 days, 6 hours, 32 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Boot</span>
                  <span>2024-01-01 08:30:15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Architecture</span>
                  <span>x86_64</span>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-4">Hardware Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CPU</span>
                  <span>Intel Xeon E5-2686 v4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cores</span>
                  <span>4 cores, 8 threads</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM</span>
                  <span>16 GB DDR4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Storage</span>
                  <span>500 GB SSD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network</span>
                  <span>1 Gbps Ethernet</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">{service.name}</h3>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Uptime</span>
                      <span>{service.uptime}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Restart
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Logs
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          <Card className="glass-card">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">System Logs</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button variant="outline" size="sm">Export</Button>
                  <Button size="sm">Refresh</Button>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="space-y-0">
                {logs.map((log, index) => (
                  <div key={index} className="p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between space-x-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          {getLevelBadge(log.level)}
                          <span className="text-sm font-medium">{log.service}</span>
                          <span className="text-sm text-muted-foreground">{log.timestamp}</span>
                        </div>
                        <p className="text-sm">{log.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSystem;