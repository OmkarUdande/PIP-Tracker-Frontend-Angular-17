import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-managers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.css'
})
export class ManagersComponent {
  viewTeam = false;
  selectedManager: any = null;
managerList = [
  {
    name: 'Ramesh Tripathi',
    role: 'Operations Manager',
    department: 'Operations',
    teamSize: 5,
    pipCount: 2,
    image: 'assets/Manager01.png'
  },
  {
    name: 'Megha Bansal',
    role: 'UX/UI',
    department: 'Operations',
    teamSize: 4,
    pipCount: 1,
    image: 'assets/Manager02.png'
  }
];

  managers = [
    {
      name: 'Ramesh Tripathi',
      department: 'Operations',
      team: [
        { name: 'Priya Khatri', role: 'Senior Analyst', status: 'Active' },
        { name: 'Aman Patel', role: 'Coordinator', status: 'PIP' },
        { name: 'Shruti Desai', role: 'Analyst', status: 'Active' },
        { name: 'Aman gupta', role: 'Coordinator', status: 'PIP' },
        { name: 'Prabhu Desai', role: 'Analyst', status: 'Active' }
      ]
    },
    {
      name: 'Megha Bansal',
      department: 'UX/UI',
      team: [
        { name: 'Kiran Mehta', role: 'UI Designer', status: 'Active' },
        { name: 'Ravi Sharma', role: 'UX Researcher', status: 'PIP' },
        { name: 'Priya Raut', role: 'Product Designer', status: 'Active' },
        { name: 'Keshav Kumavat', role: 'Jr. Product Designer', status: 'Active' },
      ]
    }
  ];

  showTeam(managerName: string) {
    const match = this.managers.find(m => m.name === managerName);
    if (match) {
      this.selectedManager = match;
      this.viewTeam = true;
    }
  }

  backToOverview() {
    this.viewTeam = false;
    this.selectedManager = null;
  }
}
