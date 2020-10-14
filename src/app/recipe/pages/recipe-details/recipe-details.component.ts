import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from './../../../core/models/recipe.model';
import { RecipeService } from './../../services/recipe.service';


@Component({
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  private recipeId: number;
  private onDestroy$: Subject<void> = new Subject<void>();
  public loadingData: boolean;
  public recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
    this.loadingData = false;
    this.getRecipeId();
  }

  ngOnInit(): void {
    if (!!this.recipeId) {
      this.getRecipe();
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getRecipeId(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.recipeId = +params.id;
      });
  }

  getRecipe(): void {
    this.recipeService
      .getRecipe(this.recipeId)
      .pipe(
        takeUntil(this.onDestroy$),
        finalize(() => this.loadingData = false)
      )
      .subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      });
  }
}
