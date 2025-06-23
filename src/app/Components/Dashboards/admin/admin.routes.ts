import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddashboardComponent } from './addashboard/addashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDirComponent } from './employee-dir/employee-dir.component';
import { ManagersComponent } from './managers/managers.component';
import { PIPTrackerComponent } from './pip-tracker/pip-tracker.component';
import { SettingsComponent } from './settings/settings.component';


export const branchManagerRoutes: Routes = [
  { path: '', component: AddashboardComponent }, // Default view
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'Employee-Dir', component: EmployeeDirComponent },
  { path: 'managers', component:ManagersComponent },
  { path: 'pip', component: PIPTrackerComponent },
  { path:'settings', component:SettingsComponent}

];
