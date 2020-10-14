import { RECIPE_MOCK } from './../../../core/mocks/recipe.mock';
import { Recipe } from './../../../core/models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipeList: Recipe[];

  constructor() { }

  ngOnInit(): void {
    this.recipeList = RECIPE_MOCK;
  }

}
