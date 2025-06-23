import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Note {
  type: 'Feedback' | 'Personal';
  author: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-feedback-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-notes.component.html',
  styleUrls: ['./feedback-notes.component.css']
})
export class FeedbackNotesComponent {
  newNote: string = '';
  notes: Note[] = [
    {
      type: 'Feedback',
      author: 'Manager',
      message: 'Great job on completing the module ahead of deadline!',
      date: '2025-06-17'
    },
    {
      type: 'Personal',
      author: 'Me',
      message: 'Need to review API error handling this week.',
      date: '2025-06-18'
    }
  ];

  addPersonalNote() {
    if (this.newNote.trim()) {
      this.notes.unshift({
        type: 'Personal',
        author: 'Me',
        message: this.newNote,
        date: new Date().toISOString().split('T')[0]
      });
      this.newNote = '';
    }
  }
}
