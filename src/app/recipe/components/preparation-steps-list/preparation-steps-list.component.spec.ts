import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationStepsListComponent } from './preparation-steps-list.component';

describe('PreparationStepsListComponent', () => {
  let component: PreparationStepsListComponent;
  let fixture: ComponentFixture<PreparationStepsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationStepsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationStepsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
