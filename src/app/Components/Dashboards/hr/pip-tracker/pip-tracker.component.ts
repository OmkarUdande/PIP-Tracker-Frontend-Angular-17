import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipdetailComponent } from '../pipdetail/pipdetail.component';

@Component({
  selector: 'app-pip-tracker',
  standalone: true,
  imports: [CommonModule, PipdetailComponent],
  templateUrl: './pip-tracker.component.html',
  styleUrl: './pip-tracker.component.css'
})
export class PIPTrackerComponent {
 currentView = 'PIPOverview';
  selectedEmployee: any = null;

  onReviewClick(employee: any) {
    this.selectedEmployee = employee;
    this.currentView = 'PIPDetail';
  }

  onBackClick() {
    this.currentView = 'PIPOverview';
  }
}
