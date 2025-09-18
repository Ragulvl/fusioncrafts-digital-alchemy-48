import { useState } from 'react';
import { Plus, Search, Mail, Phone, Calendar, MoreHorizontal, Users, Award, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminTeam = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const teamMembers = [
    {
      id: 'TM-001',
      name: 'Arun Sharma',
      role: 'Senior Full Stack Developer',
      department: 'Development',
      email: 'arun@fusioncraft.com',
      phone: '+91 98765 43210',
      joinDate: '2022-03-15',
      status: 'Active',
      projectsActive: 3,
      projectsCompleted: 12,
      skills: ['React', 'Node.js', 'MongoDB'],
      avatar: '',
      experience: '5+ years'
    },
    {
      id: 'TM-002',
      name: 'Kavya Patel',
      role: 'UI/UX Designer',
      department: 'Design',
      email: 'kavya@fusioncraft.com',
      phone: '+91 87654 32109',
      joinDate: '2023-01-10',
      status: 'Active',
      projectsActive: 2,
      projectsCompleted: 8,
      skills: ['Figma', 'Sketch', 'Adobe XD'],
      avatar: '',
      experience: '3+ years'
    },
    {
      id: 'TM-003',
      name: 'Rohit Kumar',
      role: 'Project Manager',
      department: 'Management',
      email: 'rohit@fusioncraft.com',
      phone: '+91 76543 21098',
      joinDate: '2021-08-20',
      status: 'Active',
      projectsActive: 5,
      projectsCompleted: 25,
      skills: ['Scrum', 'Agile', 'JIRA'],
      avatar: '',
      experience: '7+ years'
    },
    {
      id: 'TM-004',
      name: 'Priya Reddy',
      role: 'Frontend Developer',
      department: 'Development',
      email: 'priya@fusioncraft.com',
      phone: '+91 65432 10987',
      joinDate: '2023-06-15',
      status: 'Active',
      projectsActive: 2,
      projectsCompleted: 5,
      skills: ['React', 'Vue.js', 'TypeScript'],
      avatar: '',
      experience: '2+ years'
    },
    {
      id: 'TM-005',
      name: 'Vikash Singh',
      role: 'DevOps Engineer',
      department: 'Operations',
      email: 'vikash@fusioncraft.com',
      phone: '+91 54321 09876',
      joinDate: '2022-11-05',
      status: 'On Leave',
      projectsActive: 1,
      projectsCompleted: 10,
      skills: ['Docker', 'AWS', 'Kubernetes'],
      avatar: '',
      experience: '4+ years'
    }
  ];

  const departments = [
    { name: 'Development', count: 15, color: 'bg-blue-500' },
    { name: 'Design', count: 6, color: 'bg-purple-500' },
    { name: 'Management', count: 4, color: 'bg-green-500' },
    { name: 'Operations', count: 3, color: 'bg-orange-500' },
    { name: 'Marketing', count: 2, color: 'bg-pink-500' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case 'On Leave':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">On Leave</Badge>;
      case 'Inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Team Management</h2>
          <p className="text-muted-foreground">Manage team members and departments</p>
        </div>
        <Button className="flex items-center space-x-2" onClick={() => alert('Add Member functionality will be implemented here!')}>
          <Plus className="h-4 w-4" />
          <span>Add Member</span>
        </Button>
      </div>

      <Tabs defaultValue="members" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:inline-flex">
          <TabsTrigger value="members" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Team Members</span>
          </TabsTrigger>
          <TabsTrigger value="departments" className="flex items-center space-x-2">
            <Award className="h-4 w-4" />
            <span>Departments</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-6">
          {/* Search */}
          <Card className="glass-card p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search team members by name, role, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.id}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => alert(`Viewing profile for ${member.name}`)}>View Profile</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`Editing ${member.name}`)}>Edit Member</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`Assigning project to ${member.name}`)}>Assign Project</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => confirm(`Are you sure you want to remove ${member.name}?`)}>
                        Remove Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="font-medium">{member.role}</div>
                    <div className="text-sm text-muted-foreground">{member.department}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    {getStatusBadge(member.status)}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold">{member.projectsActive}</div>
                        <div className="text-xs text-muted-foreground">Active</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{member.projectsCompleted}</div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Skills</div>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{member.experience} experience</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${dept.color}`}></div>
                    <h3 className="font-semibold">{dept.name}</h3>
                  </div>
                  <Badge variant="secondary">{dept.count} members</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{dept.count}</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  
                  <Button variant="outline" className="w-full" onClick={() => alert(`Viewing ${dept.name} department details`)}>
                    View Department
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminTeam;