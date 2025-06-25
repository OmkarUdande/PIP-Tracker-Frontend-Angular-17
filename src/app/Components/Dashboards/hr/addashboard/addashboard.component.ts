
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title);

@Component({
  selector: 'app-addashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addashboard.component.html',
  styleUrl: './addashboard.component.css'
})
export class AddashboardComponent implements AfterViewInit{
 ngAfterViewInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Employees',
          data: [30, 45, 60, 75],
          backgroundColor: '#4f46e5',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Employees Over Months'
          }
        }
      }
    });
  }
}
