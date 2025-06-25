import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AddhrComponent } from './addhr/addhr.component';
import { ReportComponent } from './report/report.component';
import { HrlistComponent } from "./hrlist/hrlist.component";


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, DashComponent, AddhrComponent, ReportComponent, HrlistComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
currentView="Dash"

today: Date = new Date();

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/hero']);
  }

}
