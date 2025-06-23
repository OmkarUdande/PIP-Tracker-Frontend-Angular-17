import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeTasksComponent } from './employee-tasks.component';

describe('EmployeeTasksComponent', () => {
  let component: EmployeeTasksComponent;
  let fixture: ComponentFixture<EmployeeTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeTasksComponent]
    });
    fixture = TestBed.createComponent(EmployeeTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all tasks', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tasks = compiled.querySelectorAll('h3');
    expect(tasks.length).toBe(component.tasks.length);
  });
});
