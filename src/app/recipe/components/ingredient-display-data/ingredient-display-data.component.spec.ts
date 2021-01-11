import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDisplayDataComponent } from './ingredient-display-data.component';

describe('IngredientDisplayDataComponent', () => {
  let component: IngredientDisplayDataComponent;
  let fixture: ComponentFixture<IngredientDisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDisplayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
