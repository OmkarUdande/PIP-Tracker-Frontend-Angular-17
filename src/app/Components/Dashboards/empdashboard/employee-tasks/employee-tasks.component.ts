import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

interface Task {
  title: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

@Component({
  selector: 'app-employee-tasks',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.css']
})
export class EmployeeTasksComponent {
  tasks: Task[] = [
    { title: 'Submit weekly report', dueDate: '2025-06-22', priority: 'High', completed: false },
    { title: 'Review frontend PRs', dueDate: '2025-06-21', priority: 'Medium', completed: true },
    { title: 'Update timesheet', dueDate: '2025-06-20', priority: 'Low', completed: false }
  ];

  toggleTaskStatus(task: Task) {
    task.completed = !task.completed;
  }
}
