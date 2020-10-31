import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
  recipeForm: FormGroup;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      difficultyLevel: new FormControl(),
      mealType: new FormControl(),
      servesTo: new FormControl(),
      urlImage: new FormControl()
    });
  }

  onSubmit(): void {
    console.log('Form: ', this.recipeForm.value);
  }

}
