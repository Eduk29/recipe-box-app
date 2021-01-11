import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Recipe } from './../../../core/models/recipe.model';

@Component({
  selector: 'app-related-recipes',
  templateUrl: './related-recipes.component.html',
  styleUrls: ['./related-recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedRecipesComponent implements OnInit {

  @Input() relatedRecipes: Recipe[];

  constructor() { }

  ngOnInit(): void {
  }

}
