import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { PIPDetailsComponent } from './pip-details/pip-details.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings.component';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeListComponent,
    ManagerDashboardComponent,
    PIPDetailsComponent,
    ProfileComponent,
    SettingsComponent
  ],
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})

export class ManagerComponent {
  currentView = 'Manager-dashboard';
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); 
    this.router.navigate(['/hero']);
  }
}


