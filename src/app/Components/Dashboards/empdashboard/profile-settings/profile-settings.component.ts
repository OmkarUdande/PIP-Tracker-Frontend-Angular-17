import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {
  profile = {
    name: 'Rutuja K.',
    role: 'Frontend Developer',
    email: 'rutuja2429@gmail.com.',
    department: 'Tracker Team'
  };

  settings = {
    emailNotifications: true,
    systemAlerts: false
  };
}
