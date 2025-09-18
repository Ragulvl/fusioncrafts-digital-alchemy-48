import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface AdminStatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
  trend: 'up' | 'down';
}

const AdminStatsCard = ({ title, value, change, icon: Icon, color, trend }: AdminStatsCardProps) => {
  return (
    <Card className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
          <div className="text-2xl font-bold">{value}</div>
          <div className={`flex items-center text-sm mt-2 ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            {change} from last month
          </div>
        </div>
        <div className={`${color}`}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
    </Card>
  );
};

export default AdminStatsCard;