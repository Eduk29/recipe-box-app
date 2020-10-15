import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Recipe } from './../../../core/models/recipe.model';
import { transformFirstLetterInUppercase } from './../../../core/utils/system.utils';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: Recipe[];

  constructor() { }

  ngOnInit(): void {
    if (!this.recipeList) {
      throw new Error('Must have a Recipe List');
    }
  }
}
