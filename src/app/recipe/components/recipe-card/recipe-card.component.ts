import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe.model';

import { transformFirstLetterInUppercase } from './../../../core/utils/system.utils';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!this.recipe) {
      throw new Error('Must have a Recipe List');
    }
  }

  displayMealTypeNormalized(mealType: string): string {
    return transformFirstLetterInUppercase(mealType);
  }

  navigateToDetails(recipeId: number): void {
    this.router.navigateByUrl(`recipe/${recipeId}/details`);
  }

}
