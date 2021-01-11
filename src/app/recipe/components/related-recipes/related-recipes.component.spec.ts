import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedRecipesComponent } from './related-recipes.component';

describe('RelatedRecipesComponent', () => {
  let component: RelatedRecipesComponent;
  let fixture: ComponentFixture<RelatedRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
