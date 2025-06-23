import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformanceGoalsComponent } from './performance-goals.component';

describe('PerformanceGoalsComponent', () => {
  let component: PerformanceGoalsComponent;
  let fixture: ComponentFixture<PerformanceGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PerformanceGoalsComponent],
    });
    fixture = TestBed.createComponent(PerformanceGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should list all performance goals', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const goalCards = compiled.querySelectorAll('h3');
    expect(goalCards.length).toBe(component.goals.length);
  });
});
