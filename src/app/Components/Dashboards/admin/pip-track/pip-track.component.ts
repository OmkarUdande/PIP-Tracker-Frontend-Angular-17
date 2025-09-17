import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../../services/employee.service';

interface PIPEntry {
  pipId?: number;
  employeeId?: string;
  reviewerId?: string;
  employeeName?: string;
  reviewerName?: string;
  department?: string;
  designation?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  goals?: string;
  comments?: string;

  // Validation flags
  isValid?: boolean;
  validationErrors?: string[];
}

@Component({
  selector: 'app-pip-track',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pip-track.component.html',
  styleUrls: ['./pip-track.component.css']
})
export class PIPTrackComponent implements OnInit {
  pipList: PIPEntry[] = [];
  loading = false;
  errorMessage = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchPIPData();
  }

  fetchPIPData(): void {
    this.loading = true;
    const token = localStorage.getItem('token') || '';

    this.employeeService.getAllPipEntries(token).subscribe({
      next: (res: PIPEntry[]) => {
        console.log('✅ Raw PIP response:', JSON.stringify(res, null, 2));

        this.pipList = (res || []).map(pip => {
          const errors: string[] = [];

          if (!pip.employeeName?.trim()) errors.push('Missing employee name');
          if (!pip.reviewerName?.trim()) errors.push('Missing reviewer name');
          if (!pip.department?.trim()) errors.push('Missing department');
          if (!pip.designation?.trim()) errors.push('Missing designation');
          if (!pip.startDate) errors.push('Missing start date');
          if (!pip.endDate) errors.push('Missing end date');
          if (!pip.goals?.trim()) errors.push('Missing goals');

          return {
            ...pip,
            isValid: errors.length === 0,
            validationErrors: errors
          };
        });

        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Error fetching PIP data:', err);
        this.errorMessage = 'Failed to load PIP data. No PIP entries found.';
        this.loading = false;
      }
    });
  }
}
