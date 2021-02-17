import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlternativeIngredientDialogComponent } from './add-alternative-ingredient-dialog.component';

describe('AddAlternativeIngredientDialogComponent', () => {
  let component: AddAlternativeIngredientDialogComponent;
  let fixture: ComponentFixture<AddAlternativeIngredientDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlternativeIngredientDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlternativeIngredientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
