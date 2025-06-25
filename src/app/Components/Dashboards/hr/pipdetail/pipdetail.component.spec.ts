import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipdetailComponent } from './pipdetail.component';

describe('PipdetailComponent', () => {
  let component: PipdetailComponent;
  let fixture: ComponentFixture<PipdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
