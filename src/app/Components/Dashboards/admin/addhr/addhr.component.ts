import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addhr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addhr.component.html',
  styleUrl: './addhr.component.css'
})
export class AddhrComponent {
 hr = {
    name: '',
    email: '',
    contact: '',
    employeeId: '',
    department: '',
    role: 'HR'
  };

  submitForm() {
    console.log('HR Registered:', this.hr);
    // Add API or service logic here
  }
}
