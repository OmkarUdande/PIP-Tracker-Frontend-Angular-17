import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { PIPDetailsComponent } from './pip-details/pip-details.component';
import { SettingsComponent } from './settings.component';

export const managerRoutes: Routes = [
{path: 'manager-dashboard',component: ManagerDashboardComponent},
{ path: 'employees-list', component: EmployeeListComponent },
{path: 'pip-detail', component:PIPDetailsComponent},
{ path: 'profile', component: ProfileComponent },
{path: 'settings', component:SettingsComponent},
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];