import { Component } from '@angular/core';
import { AddashboardComponent } from './addashboard/addashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDirComponent } from './employee-dir/employee-dir.component';
import { PIPTrackerComponent } from './pip-tracker/pip-tracker.component';
import { ManagersComponent } from './managers/managers.component';
import { SettingsComponent } from './settings/settings.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [AddashboardComponent, AddEmployeeComponent, EmployeeDirComponent, PIPTrackerComponent, ManagersComponent, SettingsComponent, CommonModule, ],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.css'
})
export class HRComponent {
currentView="Dashboard"

today: Date = new Date();

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/hero']);
  }

}
