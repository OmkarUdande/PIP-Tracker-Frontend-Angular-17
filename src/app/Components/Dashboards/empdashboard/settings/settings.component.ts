import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class EmpSettingsComponent implements OnInit {
  darkMode = false;
  emailReminders = true;
  systemAlerts = false;
  greeting = 'Welcome, Rutuja!';

  ngOnInit(): void {
    const savedMode = localStorage.getItem('darkMode');
    this.darkMode = savedMode === 'true';
    this.applyDarkMode();
  }

  toggleDarkMode(): void {
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.applyDarkMode();
  }

  private applyDarkMode(): void {
    const root = document.documentElement;
    if (this.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
