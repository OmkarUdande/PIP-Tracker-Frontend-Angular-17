import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Components/login/login.component";
import { HeroComponent } from './Components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { EmpdashboardComponent } from './Components/Dashboards/empdashboard/empdashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,HeroComponent,CommonModule,EmpdashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PIP_Tracker';
  showLogin = false;

  displayLogin() {
    this.showLogin = true;
  }

  closeLogin() {
    this.showLogin = false;
  }
    constructor(private router: Router) { }
   handleLogin(role: string) {
    this.showLogin = false; // 👈 This hides the login before navigating
    if (role === 'employee') {
      this.router.navigate(['/empdashboard']);
    } else if (role === 'manager') {
      this.router.navigate(['/managerdashboard']);
    } else if (role === 'admin') {
      this.router.navigate(['/admindashboard']);
    }
  }
}
