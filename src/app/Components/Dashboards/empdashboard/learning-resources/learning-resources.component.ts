import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Resource {
  title: string;
  link: string;
  topic: string;
  completed: boolean;
}

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.css']
})
export class LearningResourcesComponent {
  selectedTopic: string = 'All';

  resources: Resource[] = [
    {
      title: 'Angular Basics',
      link: 'https://angular.io/start',
      topic: 'Angular',
      completed: false
    },
    {
      title: 'RxJS Operators Deep Dive',
      link: 'https://rxjs.dev/guide/operators',
      topic: 'RxJS',
      completed: false
    },
    {
      title: 'Tailwind CSS Guide',
      link: 'https://tailwindcss.com/docs',
      topic: 'Tailwind',
      completed: false
    },
    {
      title: 'TypeScript Fundamentals',
      link: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
      topic: 'TypeScript',
      completed: false
    }
  ];

  get filteredResources(): Resource[] {
    return this.selectedTopic === 'All'
      ? this.resources
      : this.resources.filter(r => r.topic === this.selectedTopic);
  }

  get uniqueTopics(): string[] {
    return ['All', ...new Set(this.resources.map(r => r.topic))];
  }
}
