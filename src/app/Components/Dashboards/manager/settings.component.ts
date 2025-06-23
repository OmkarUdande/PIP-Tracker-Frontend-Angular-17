import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @Input() isDarkMode = false;
  @Input() toggleDarkMode!: () => void;


   handleToggle() {
    if (this.toggleDarkMode) {
      this.toggleDarkMode();
    }
  }
  
}
