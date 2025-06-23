// src/app/Components/Dashboards/empdashboard/empdashboard.routes.ts

import { Routes } from '@angular/router';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview.component';

// Root Pages


// Top-Level Dashboards
import { AdminComponent } from '../admin/admin.component';
import { ManagerComponent } from '../manager/manager.component';
import { EmpdashboardComponent } from './empdashboard.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { FeedbackNotesComponent } from './feedback-notes/feedback-notes.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { PerformanceGoalsComponent } from './performance-goals/performance-goals.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SettingsComponent } from '../manager/settings.component';
import { SupportQueriesComponent } from './support-queries/support-queries.component';

export const routes: Routes = [
   { path: '', component: DashboardOverviewComponent }, // Default view
   { path: 'employee-tasks', component: EmployeeTasksComponent },
   { path: 'feedback-notes', component: FeedbackNotesComponent },
   { path: 'learning-resources', component:LearningResourcesComponent },
   { path: 'performance-goals', component: PerformanceGoalsComponent },
   { path:'profile-settings', component:ProfileSettingsComponent},
   { path:'settings', component: SettingsComponent},
   { path:'support-queries', component: SupportQueriesComponent},


];
