import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIPTrackerComponent } from './pip-tracker.component';

describe('PIPTrackerComponent', () => {
  let component: PIPTrackerComponent;
  let fixture: ComponentFixture<PIPTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PIPTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PIPTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
