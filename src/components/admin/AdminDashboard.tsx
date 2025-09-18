import { CheckCircle, ArrowUpRight, Activity, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import AdminStatsCard from './AdminStatsCard';
import { FileText, Users, DollarSign, Globe, Building, Target, Clock, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
  const dashboardStats = [
    {
      title: 'Total Projects',
      value: '127',
      change: '+12%',
      icon: FileText,
      color: 'text-blue-600',
      trend: 'up' as const
    },
    {
      title: 'Active Clients',
      value: '48',
      change: '+5%',
      icon: Users,
      color: 'text-green-600',
      trend: 'up' as const
    },
    {
      title: 'Total Revenue',
      value: '₹2.4M',
      change: '+23%',
      icon: DollarSign,
      color: 'text-purple-600',
      trend: 'up' as const
    },
    {
      title: 'Website Visits',
      value: '12.5K',
      change: '+18%',
      icon: Globe,
      color: 'text-orange-600',
      trend: 'up' as const
    }
  ];

  const recentActivities = [
    { action: 'New project created', details: 'E-commerce Platform for TechCorp', time: '2 hours ago', type: 'project' },
    { action: 'Client meeting scheduled', details: 'Requirements discussion with StartupXYZ', time: '4 hours ago', type: 'meeting' },
    { action: 'Payment received', details: '₹2,50,000 from MegaCorp Ltd', time: '6 hours ago', type: 'payment' },
    { action: 'Team member added', details: 'Senior Developer joined Development Team', time: '1 day ago', type: 'team' },
    { action: 'System backup completed', details: 'All data successfully backed up to cloud', time: '1 day ago', type: 'system' }
  ];

  const systemMetrics = [
    { name: 'Server Performance', value: 92, color: 'bg-green-500' },
    { name: 'Database Optimization', value: 88, color: 'bg-blue-500' },
    { name: 'Security Score', value: 95, color: 'bg-purple-500' },
    { name: 'User Satisfaction', value: 97, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-8">
      {/* System Health Alert */}
      <Alert className="border-green-200 bg-green-50">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          All systems operational. Last backup completed successfully 2 hours ago.
        </AlertDescription>
      </Alert>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <AdminStatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activities Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* System Performance Metrics */}
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-orbitron font-semibold text-lg">System Performance</h3>
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-4">
            {systemMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{metric.name}</span>
                  <span className="font-medium">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-orbitron font-semibold text-lg">Recent Activities</h3>
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.details}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;