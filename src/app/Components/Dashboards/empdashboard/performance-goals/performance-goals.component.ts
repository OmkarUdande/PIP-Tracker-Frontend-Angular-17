import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-goals.component.html',
  styleUrls: ['./performance-goals.component.css']
})
export class PerformanceGoalsComponent {
  goals = [
    {
      title: 'Complete Angular Migration',
      status: 'In Progress',
      owner: 'Rutuja',
      deadline: new Date('2025-07-15')
    },
    {
      title: 'Optimize API performance',
      status: 'Completed',
      owner: 'Team Lead',
      deadline: new Date('2025-06-05')
    }
  ];
}

