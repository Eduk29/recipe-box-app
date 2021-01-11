import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationStepsDisplayDataComponent } from './preparation-steps-display-data.component';

describe('PreparationStepsDisplayDataComponent', () => {
  let component: PreparationStepsDisplayDataComponent;
  let fixture: ComponentFixture<PreparationStepsDisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationStepsDisplayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationStepsDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
