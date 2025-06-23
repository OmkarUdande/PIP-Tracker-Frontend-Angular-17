import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportQueriesComponent } from './support-queries.component';

describe('SupportQueriesComponent', () => {
  let component: SupportQueriesComponent;
  let fixture: ComponentFixture<SupportQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SupportQueriesComponent],
    });
    fixture = TestBed.createComponent(SupportQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all FAQs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const questions = compiled.querySelectorAll('p.font-medium');
    expect(questions.length).toBe(component.faqs.length);
  });
});
