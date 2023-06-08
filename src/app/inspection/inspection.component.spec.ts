import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionComponent } from './inspection.component';

describe('InspectionComponent', () => {
  let component: InspectionComponent;
  let fixture: ComponentFixture<InspectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionComponent]
    });
    fixture = TestBed.createComponent(InspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
