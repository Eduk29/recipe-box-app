import { Recipe } from 'src/app/core/models/recipe.model';
import { Ingredient } from './../../../core/models/ingredient.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { forkJoin, Observable, Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { transformFirstLetterInUppercase } from 'src/app/core/utils/system.utils';

import { environment } from './../../../../environments/environment';
import { SystemOption } from './../../../core/models/system-option.model';
import { SystemOptionsService } from './../../../core/services/system-options.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  @Input() recipe: Recipe;
  @Output() emitterOnSubmit = new EventEmitter();

  private onDestroy$: Subject<void> = new Subject<void>();

  public newIngredient: Ingredient = {};
  public difficultyLevelOptions: SystemOption[];
  public isLoading: boolean = false;
  public mealTypeOptions: SystemOption[];
  public teste: string;

  constructor(
    private systemOptionsService: SystemOptionsService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.recipe.ingredients = [];
    forkJoin([
      this.getDifficultyLevelOptions(),
      this.getMealTypelOptions()
    ])
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  addNewIngredient(): void {
    const { ingredients } = this.recipe;
    const ingredient: Ingredient = { id: ingredients.length + 1, description: this.newIngredient.description };
    this.recipe.ingredients = [...ingredients, ingredient];
  }

  displaySelectFilterLabel(systemOption: SystemOption): string {
    const difficultyLevelLabel = environment.selectedLanguage === 'Portuguese' ?
      systemOption.displayValuePortuguese : systemOption.displayValueEnglish;
    return transformFirstLetterInUppercase(difficultyLevelLabel);
  }

  onSubmit(): void {
    this.emitterOnSubmit.emit();
  }

  removeIngredient(ingredient: Ingredient): void {
    this.recipe.ingredients = this.recipe.ingredients.filter(item => item.id !== ingredient.id);
  }

  private getDifficultyLevelOptions(): Observable<any> {
    return this.systemOptionsService
      .listDifficultyLevel()
      .pipe(
        tap((difficultyLevelOptions: SystemOption[]) => {
          this.difficultyLevelOptions = difficultyLevelOptions;
        }),
        takeUntil(this.onDestroy$));
  }

  private getMealTypelOptions(): Observable<any> {
    return this.systemOptionsService
      .listMealType()
      .pipe(
        tap((mealTypeOptions: SystemOption[]) => {
          this.mealTypeOptions = mealTypeOptions;
        }),
        takeUntil(this.onDestroy$));
  }
}
