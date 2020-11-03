import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Recipe } from 'src/app/core/models/recipe.model';

@Component({
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
  recipe: Recipe = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form: ', this.recipe);
  }
}
