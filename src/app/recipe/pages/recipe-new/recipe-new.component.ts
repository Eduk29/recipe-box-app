import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe.model';

import { RecipeService } from './../../services/recipe.service';

@Component({
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
  recipe: Recipe = {};

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.save();
  }

  private save(): void {
    this.recipeService
      .save(this.recipe)
      .subscribe((result: Recipe) => {
        console.log('result: ', result)
      })
  }
}
