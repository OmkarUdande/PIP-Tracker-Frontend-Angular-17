import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIPDetailsComponent } from './pip-details.component';

describe('PIPDetailsComponent', () => {
  let component: PIPDetailsComponent;
  let fixture: ComponentFixture<PIPDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PIPDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PIPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
