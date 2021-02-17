import { takeUntil, finalize, switchMap, tap, map, pluck } from 'rxjs/operators';
import { forkJoin, Subject, Observable } from 'rxjs';
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
  public relatedRecipes: Recipe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.loadingData = false;
    this.getRecipeId();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getRecipeId(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.recipeId = +params.id;
        this.getRecipe();
      });
  }

  getRecipe(): void {
    this.loadingData = true;
    this.recipeService
      .getRecipe(this.recipeId)
      .pipe(
        tap((recipe) => this.getRelatedRecipes(recipe)),
        takeUntil(this.onDestroy$),
        finalize(() => this.loadingData = false)
      )
      .subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      });
  }

  getRelatedRecipes(recipeItem: Recipe): void {
    const filter = `?mealType.systemValue=${recipeItem.mealType.systemValue}`;
    this.loadingData = true;
    this.recipeService
      .listAll(filter)
      .pipe(
        takeUntil(this.onDestroy$),
        finalize(() => this.loadingData = false)
      ).subscribe ((relatedRecipes: Recipe[]) => {
        this.relatedRecipes = this.filterRelatedRecipes(relatedRecipes, recipeItem)
      })
  }

  private filterRelatedRecipes(relatedRecipes: Recipe[], recipeItem: Recipe): Recipe[] {
    return relatedRecipes.filter(item => item.id !== recipeItem.id);
  }
}
