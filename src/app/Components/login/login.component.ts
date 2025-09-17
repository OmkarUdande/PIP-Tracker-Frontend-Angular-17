import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, animate, style } from '@angular/animations';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeOutUp', [
      transition(':leave', [
        animate('300ms ease', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  showLogin = true;
  email = '';
  password = '';
  errorMessage = '';
  role = 'ADMIN'; // Default role
  isLoading = false;
  showPassword = false;
  showToast: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  login() {
    const trimmedEmail = this.email.trim();
    const trimmedPassword = this.password.trim();

    if (this.email !== trimmedEmail) {
      this.errorMessage = 'Email should not contain leading or trailing spaces.';
      return;
    }

    if (!trimmedEmail || !trimmedPassword) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    // ✅ Enforce lowercase email only
    if (trimmedEmail !== trimmedEmail.toLowerCase()) {
      this.errorMessage = 'Email must be in lowercase only.';
      return;
    }

    const allowedRoles = ['ADMIN', 'HR', 'MANAGER', 'EMPLOYEE'];
    if (!allowedRoles.includes(this.role)) {
      this.errorMessage = 'Invalid role selected.';
      return;
    }

    this.isLoading = true;

    this.employeeService.login(trimmedEmail, trimmedPassword, this.role).subscribe({
      next: (res: any) => {
        const employee = res.employee || res.user || res || null;

        if (!employee) {
          this.errorMessage = 'Invalid response from server. Please contact admin.';
          this.isLoading = false;
          return;
        }

        const actualRole = employee.role ? employee.role.toUpperCase() : 'UNKNOWN';

        // ✅ Role mismatch check
        if (actualRole !== this.role) {
          this.errorMessage = `Role mismatch: You selected "${this.role}", but your account is "${actualRole}".`;
          this.toastr.error(this.errorMessage);
          this.isLoading = false;
          return;
        }

        localStorage.setItem('token', res.token || '');
        localStorage.setItem('userId', employee.id || '');
        localStorage.setItem('email', employee.email || '');
        localStorage.setItem('role', actualRole);
        localStorage.setItem('user', JSON.stringify(employee));

        this.toastr.success(`Welcome ${employee.name || employee.email}! 🎉`, 'Login Successful');
        this.showToast = true;

        switch (actualRole) {
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
          case 'HR':
            this.router.navigate(['/hr']);
            break;
          case 'MANAGER':
            this.router.navigate(['/manager']);
            break;
          case 'EMPLOYEE':
            this.router.navigate(['/empdashboard']);
            break;
          default:
            this.errorMessage = 'Unknown role. Please contact admin.';
        }

        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Login failed: Invalid credentials or unauthorized.';
        console.error('❌ Login Error:', err);
        this.toastr.error('Login failed. Please try again.');
        this.isLoading = false;
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  navigatetoemp() {
    this.role = 'EMPLOYEE';
    this.errorMessage = '';
  }

  navigatetomanager() {
    this.role = 'MANAGER';
    this.errorMessage = '';
  }

  navigatetohr() {
    this.role = 'HR';
    this.errorMessage = '';
  }

  navigatetoadmin() {
    this.role = 'ADMIN';
    this.errorMessage = '';
  }

  onClose() {
    this.errorMessage = '';
  }
}
