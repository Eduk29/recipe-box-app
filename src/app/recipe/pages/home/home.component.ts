import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { Recipe } from './../../../core/models/recipe.model';
import { RecipeService } from './../../services/recipe.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private onDestroy$: Subject<void> = new Subject<void>();
  public recipeList: Recipe[];
  public loadingData: boolean;

  constructor(private recipeService: RecipeService) {
    this.loadingData = false;
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getRecipes(): void {
    this.loadingData = true;
    this.recipeService
      .getRecipes()
      .pipe(
        takeUntil(this.onDestroy$),
        finalize(() => this.loadingData = false)
      )
      .subscribe((recipeList: Recipe[]) => {
        this.recipeList = recipeList;
      });
  }

}
