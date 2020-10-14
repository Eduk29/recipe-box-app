import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Recipe } from './../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-detail-card',
  templateUrl: './recipe-detail-card.component.html',
  styleUrls: ['./recipe-detail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailCardComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
