import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { EmpdashboardComponent } from '../Dashboards/empdashboard/empdashboard.component';
import { Router } from '@angular/router';
import { ManagerComponent } from '../Dashboards/manager/manager.component';
import { AdminComponent } from '../Dashboards/admin/admin.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,EmpdashboardComponent,ManagerComponent,AdminComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('fadeOutUp', [
      transition(':leave', [
        animate('300ms ease', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ]),
    ]),
  ]
})
export class LoginComponent {
  showLogin = true;

 @Output() closeLogin = new EventEmitter<void>();

onClose() {
 this.router.navigate(['/hero']);
}
  constructor(private router: Router) {}

navigatetoemp() {
  this.router.navigate(['/empdashboard']);
}

navigatetomanager() {
  this.router.navigate(['/manager']);
}

navigatetohr() {
  this.router.navigate(['/hr']);
}
navigatetoadmin() {
  this.router.navigate(['/admin']);
}

}
