import { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 'PRJ-001',
      name: 'E-commerce Platform',
      client: 'TechCorp Ltd',
      status: 'In Progress',
      progress: 75,
      startDate: '2024-01-15',
      deadline: '2024-03-15',
      budget: '₹5,50,000',
      team: 'Team Alpha'
    },
    {
      id: 'PRJ-002',
      name: 'Mobile Banking App',
      client: 'FinanceBank',
      status: 'Completed',
      progress: 100,
      startDate: '2023-11-01',
      deadline: '2024-01-30',
      budget: '₹8,75,000',
      team: 'Team Beta'
    },
    {
      id: 'PRJ-003',
      name: 'Corporate Website',
      client: 'MegaCorp Inc',
      status: 'Planning',
      progress: 15,
      startDate: '2024-02-01',
      deadline: '2024-04-15',
      budget: '₹3,25,000',
      team: 'Team Gamma'
    },
    {
      id: 'PRJ-004',
      name: 'Learning Management System',
      client: 'EduTech Solutions',
      status: 'In Progress',
      progress: 45,
      startDate: '2024-01-20',
      deadline: '2024-05-20',
      budget: '₹7,20,000',
      team: 'Team Delta'
    },
    {
      id: 'PRJ-005',
      name: 'Healthcare Portal',
      client: 'MedLife Hospital',
      status: 'On Hold',
      progress: 30,
      startDate: '2023-12-15',
      deadline: '2024-03-30',
      budget: '₹6,40,000',
      team: 'Team Alpha'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100"><Clock className="h-3 w-3 mr-1" />In Progress</Badge>;
      case 'Planning':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Calendar className="h-3 w-3 mr-1" />Planning</Badge>;
      case 'On Hold':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />On Hold</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Projects Management</h2>
          <p className="text-muted-foreground">Manage and track all project progress</p>
        </div>
        <Button className="flex items-center space-x-2" onClick={() => alert('New Project functionality will be implemented here!')}>
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="glass-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="on hold">On Hold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Projects Table */}
      <Card className="glass-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-muted-foreground">{project.id}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{project.client}</TableCell>
                <TableCell>{getStatusBadge(project.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-12">{project.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{project.startDate}</div>
                    <div className="text-muted-foreground">to {project.deadline}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{project.budget}</TableCell>
                <TableCell>{project.team}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => alert(`Viewing details for ${project.name}`)}>View Details</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`Editing ${project.name}`)}>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`Updating status for ${project.name}`)}>Update Status</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => confirm(`Are you sure you want to delete ${project.name}?`)}>
                        Delete Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminProjects;