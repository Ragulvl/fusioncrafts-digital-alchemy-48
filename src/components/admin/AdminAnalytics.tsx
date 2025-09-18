import { TrendingUp, Users, Globe, Clock, BarChart3, PieChart, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminAnalytics = () => {
  const websiteStats = [
    { label: 'Total Visitors', value: '45,672', change: '+12.5%', trend: 'up' },
    { label: 'Page Views', value: '128,449', change: '+8.2%', trend: 'up' },
    { label: 'Bounce Rate', value: '34.2%', change: '-2.1%', trend: 'down' },
    { label: 'Avg. Session', value: '3m 24s', change: '+15.3%', trend: 'up' },
  ];

  const topPages = [
    { page: '/home', views: 12547, percentage: 35.2 },
    { page: '/services', views: 8932, percentage: 25.1 },
    { page: '/portfolio', views: 6421, percentage: 18.0 },
    { page: '/about', views: 4892, percentage: 13.7 },
    { page: '/contact', views: 2876, percentage: 8.0 },
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: 18654, percentage: 40.8, color: 'bg-blue-500' },
    { source: 'Direct', visitors: 13726, percentage: 30.1, color: 'bg-green-500' },
    { source: 'Social Media', visitors: 7834, percentage: 17.2, color: 'bg-purple-500' },
    { source: 'Referrals', visitors: 3892, percentage: 8.5, color: 'bg-orange-500' },
    { source: 'Email', visitors: 1566, percentage: 3.4, color: 'bg-pink-500' },
  ];

  const businessMetrics = [
    { label: 'Lead Generation', value: '234', change: '+18.7%', trend: 'up' },
    { label: 'Conversion Rate', value: '3.8%', change: '+0.5%', trend: 'up' },
    { label: 'Contact Forms', value: '156', change: '+22.1%', trend: 'up' },
    { label: 'Quote Requests', value: '89', change: '+15.9%', trend: 'up' },
  ];

  const deviceStats = [
    { device: 'Desktop', percentage: 58.3, visitors: 26643 },
    { device: 'Mobile', percentage: 35.7, visitors: 16305 },
    { device: 'Tablet', percentage: 6.0, visitors: 2724 },
  ];

  const locationStats = [
    { country: 'India', visitors: 32451, percentage: 71.1 },
    { country: 'United States', visitors: 5678, percentage: 12.4 },
    { country: 'United Kingdom', visitors: 2341, percentage: 5.1 },
    { country: 'Canada', visitors: 1834, percentage: 4.0 },
    { country: 'Australia', visitors: 1456, percentage: 3.2 },
    { country: 'Others', visitors: 1912, percentage: 4.2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Website performance and user insights</p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="website" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
          <TabsTrigger value="website" className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>Website</span>
          </TabsTrigger>
          <TabsTrigger value="business" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Business</span>
          </TabsTrigger>
          <TabsTrigger value="audience" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Audience</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="website" className="space-y-6">
          {/* Website Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteStats.map((stat, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <div className={`flex items-center text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`h-3 w-3 mr-1 ${
                      stat.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </Card>
            ))}
          </div>

          {/* Top Pages & Traffic Sources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Top Pages</h3>
              </div>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium">{page.page}</div>
                      <div className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{page.percentage}%</div>
                      <div className="w-20 bg-muted rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <PieChart className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Traffic Sources</h3>
              </div>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                      <span className="font-medium">{source.source}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{source.visitors.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{source.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          {/* Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessMetrics.map((metric, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`h-3 w-3 mr-1 ${
                      metric.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
              </Card>
            ))}
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Lead Generation Trend</h3>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[45, 52, 48, 61, 55, 67, 72, 58, 69, 74, 68, 81, 89, 76].map((height, index) => (
                  <div
                    key={index}
                    className="bg-primary rounded-t flex-1 transition-all hover:bg-primary/80"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Last 14 days performance
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Conversion Funnel</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Website Visitors</span>
                    <span>45,672</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Page Engagement</span>
                    <span>18,456</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Form Views</span>
                    <span>4,234</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Submissions</span>
                    <span>1,756</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '41%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          {/* Device & Location Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Device Usage</h3>
              </div>
              <div className="space-y-4">
                {deviceStats.map((device, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{device.device}</span>
                      <span className="text-sm text-muted-foreground">
                        {device.visitors.toLocaleString()} ({device.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Geographic Distribution</h3>
              </div>
              <div className="space-y-3">
                {locationStats.map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="font-medium">{location.country}</div>
                    <div className="text-right">
                      <div className="font-medium">{location.visitors.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{location.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* User Behavior */}
          <Card className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">User Behavior Insights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3.2</div>
                <div className="text-sm text-muted-foreground">Pages per Session</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">67%</div>
                <div className="text-sm text-muted-foreground">Returning Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminAnalytics;