import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCancelAction(): void {
    history.back();
  }

  onSubmit(): void {
    this.save();
  }

  private save(): void {
    this.recipeService
      .save(this.recipe)
      .subscribe((result: Recipe) => {
        this.router.navigate(['..'], {relativeTo: this.activatedRoute})
        // TODO: Add feedback message
      })
  }
}
