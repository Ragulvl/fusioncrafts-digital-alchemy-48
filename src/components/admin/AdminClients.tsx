import { useState } from 'react';
import { Plus, Search, Mail, Phone, Building2, MapPin, MoreHorizontal, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const AdminClients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const clients = [
    {
      id: 'CLI-001',
      name: 'TechCorp Ltd',
      contactPerson: 'Rajesh Kumar',
      email: 'rajesh@techcorp.com',
      phone: '+91 98765 43210',
      company: 'Technology Solutions',
      location: 'Mumbai, India',
      projects: 3,
      totalValue: '₹15,75,000',
      status: 'Active',
      rating: 4.8,
      joinDate: '2023-06-15',
      avatar: ''
    },
    {
      id: 'CLI-002',
      name: 'FinanceBank',
      contactPerson: 'Priya Sharma',
      email: 'priya@financebank.in',
      phone: '+91 87654 32109',
      company: 'Banking & Finance',
      location: 'Delhi, India',
      projects: 2,
      totalValue: '₹12,50,000',
      status: 'Active',
      rating: 4.9,
      joinDate: '2023-04-20',
      avatar: ''
    },
    {
      id: 'CLI-003',
      name: 'MegaCorp Inc',
      contactPerson: 'Arjun Patel',
      email: 'arjun@megacorp.com',
      phone: '+91 76543 21098',
      company: 'Manufacturing',
      location: 'Ahmedabad, India',
      projects: 1,
      totalValue: '₹8,25,000',
      status: 'Active',
      rating: 4.7,
      joinDate: '2024-01-10',
      avatar: ''
    },
    {
      id: 'CLI-004',
      name: 'EduTech Solutions',
      contactPerson: 'Sneha Reddy',
      email: 'sneha@edutech.in',
      phone: '+91 65432 10987',
      company: 'Education Technology',
      location: 'Bangalore, India',
      projects: 1,
      totalValue: '₹7,20,000',
      status: 'Active',
      rating: 4.6,
      joinDate: '2023-12-05',
      avatar: ''
    },
    {
      id: 'CLI-005',
      name: 'MedLife Hospital',
      contactPerson: 'Dr. Amit Singh',
      email: 'amit@medlife.com',
      phone: '+91 54321 09876',
      company: 'Healthcare',
      location: 'Chennai, India',
      projects: 1,
      totalValue: '₹6,40,000',
      status: 'Inactive',
      rating: 4.5,
      joinDate: '2023-09-18',
      avatar: ''
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case 'Inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Client Management</h2>
          <p className="text-muted-foreground">Manage client relationships and information</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Client</span>
        </Button>
      </div>

      {/* Search */}
      <Card className="glass-card p-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients by name, contact person, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={client.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {getInitials(client.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.id}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Client</DropdownMenuItem>
                  <DropdownMenuItem>Send Message</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete Client
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                {getStatusBadge(client.status)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{client.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{client.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold">{client.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{client.totalValue}</div>
                    <div className="text-xs text-muted-foreground">Total Value</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{client.rating}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Since {new Date(client.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminClients;