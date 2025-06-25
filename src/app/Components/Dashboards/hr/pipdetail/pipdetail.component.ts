import { Component, EventEmitter, Input, Output,AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js';
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Title);

@Component({
  selector: 'app-pipdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipdetail.component.html',
})
export class PipdetailComponent implements AfterViewInit {
  @Input() employee: any;
  @Output() back = new EventEmitter<void>();
  @ViewChild('pipProgressChart') chartRef!: ElementRef<HTMLCanvasElement>;

   ngAfterViewInit() {
    const ctx = this.chartRef.nativeElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Angular Concepts', 'Tailwind Mastery', 'UX Improvements', 'Chart.js Integration', 'Code Quality'],
        datasets: [{
          label: 'Progress (%)',
          data: [60, 70, 55, 80, 65],
          backgroundColor: '#f43f5e',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Frontend Skill Development Progress'
          }
        }
      }
    });
  }
}

