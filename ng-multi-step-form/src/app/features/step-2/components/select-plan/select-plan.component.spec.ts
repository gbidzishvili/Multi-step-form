import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlanComponent } from './select-plan.component';

describe('SelectPlanComponent', () => {
  let component: SelectPlanComponent;
  let fixture: ComponentFixture<SelectPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPlanComponent]
    });
    fixture = TestBed.createComponent(SelectPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
