import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent {
  lastUpdated = new Date();

  metrics = {
    goalsCompleted: 12,
    pendingTasks: 3,
    feedbackReceived: 6,
    learningHours: 18
  };
  summaryCards: any;
}
