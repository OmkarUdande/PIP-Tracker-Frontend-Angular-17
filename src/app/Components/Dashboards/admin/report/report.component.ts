import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
 technicalReports = [
    { title: 'Deployment Summary', date: '2025-06-24', status: 'Success', author: 'DevOps Team' },
    { title: 'Module Refactor Report', date: '2025-06-20', status: 'In Review', author: 'Aditya Singh' },
    { title: 'API Latency Analysis', date: '2025-06-18', status: 'Completed', author: 'Backend Unit' }
  ];
}
