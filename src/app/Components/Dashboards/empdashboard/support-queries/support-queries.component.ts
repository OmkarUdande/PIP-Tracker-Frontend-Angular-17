import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-support-queries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support-queries.component.html',
  styleUrls: ['./support-queries.component.css']
})
export class SupportQueriesComponent {
  faqs = [
    {
      question: 'How do I access my PIP report?',
      answer: 'Go to Dashboard > Progress Reports to view or download your PIP summary.'
    },
    {
      question: 'Whom do I contact for technical issues?',
      answer: 'Please reach out to IT Support via your internal helpdesk or ticketing system.'
    },
    {
      question: 'Can I update my goals mid-cycle?',
      answer: 'Yes, but changes must be discussed and approved by your reporting manager.'
    }
  ];

  ticket = {
    subject: '',
    message: ''
  };

  submitTicket() {
    if (this.ticket.subject.trim() && this.ticket.message.trim()) {
      alert('Support ticket submitted! Our team will get back to you soon.');
      this.ticket = { subject: '', message: '' };
    } else {
      alert('Please fill in both the subject and message fields before submitting.');
    }
  }
}
