import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { DashboardOverviewComponent } from "./dashboard/dashboard-overview.component";
import { EmployeeTasksComponent } from "./employee-tasks/employee-tasks.component";
import { FeedbackNotesComponent } from './feedback-notes/feedback-notes.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { PerformanceGoalsComponent } from './performance-goals/performance-goals.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { EmpSettingsComponent } from './settings/settings.component';
import { SupportQueriesComponent } from './support-queries/support-queries.component';


@Component({
  selector: 'app-empdashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardOverviewComponent, EmployeeTasksComponent,FeedbackNotesComponent,LearningResourcesComponent,PerformanceGoalsComponent,ProfileSettingsComponent,EmpSettingsComponent,SupportQueriesComponent],
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent {
  currentView: string = 'dashboard';

  constructor(private router: Router) {

  }

  logout(): void {
    // Clear session/local storage or auth tokens if any
    localStorage.clear(); // or sessionStorage.clear();

    // Redirect to login or landing page
    this.router.navigate(['/hero']); // adjust path as per your route config
  }
}

