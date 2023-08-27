import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingComponent } from './finishing.component';

describe('FinishingComponent', () => {
  let component: FinishingComponent;
  let fixture: ComponentFixture<FinishingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishingComponent]
    });
    fixture = TestBed.createComponent(FinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
