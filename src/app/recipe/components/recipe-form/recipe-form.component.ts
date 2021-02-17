import { AddAlternativeIngredientDialogComponent } from './../add-alternative-ingredient-dialog/add-alternative-ingredient-dialog.component';
import { PreparationStep } from './../../../core/models/preparationStep.model';
import { Recipe } from 'src/app/core/models/recipe.model';
import { Ingredient } from './../../../core/models/ingredient.model';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { forkJoin, Observable, Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { transformFirstLetterInUppercase } from 'src/app/core/utils/system.utils';

import { environment } from './../../../../environments/environment';
import { SystemOption } from './../../../core/models/system-option.model';
import { SystemOptionsService } from './../../../core/services/system-options.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-recipe-form',
	templateUrl: './recipe-form.component.html',
	styleUrls: ['./recipe-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeFormComponent implements OnInit, OnDestroy {
	@Input() recipe: Recipe;

	private onDestroy$: Subject<void> = new Subject<void>();

	public difficultyLevelOptions: SystemOption[];
	public isLoading: boolean = false;
	public mealTypeOptions: SystemOption[];
	public newIngredient: Ingredient = {};
  public newAlternativeIngredient: Ingredient = {};
	public newPreparationStep: PreparationStep = {};

	constructor(
		private systemOptionsService: SystemOptionsService,
		public addAlternativeIngredientDialog: MatDialog
	) {}

	ngOnInit(): void {
		this.isLoading = true;
		this.recipe.ingredients = [];
		this.recipe.preparationSteps = [];
		forkJoin([this.getDifficultyLevelOptions(), this.getMealTypelOptions()])
			.pipe(finalize(() => (this.isLoading = false)))
			.subscribe();
	}

	ngOnDestroy(): void {
		this.onDestroy$.next();
		this.onDestroy$.complete();
	}

	addAlternativeIngredient(ingredient: Ingredient): void {
    const dialogRef = this.addAlternativeIngredientDialog
      .open(AddAlternativeIngredientDialogComponent, {
        width: '650px',
        height: '300px',
        data: ingredient
    });

    dialogRef.afterClosed()
      .subscribe((alternativeIngredientToAdd: Ingredient) => {
        alternativeIngredientToAdd.id = 1;
        ingredient.alternativeIngredient = alternativeIngredientToAdd;
      })
	}

	addNewIngredient(): void {
		const { ingredients } = this.recipe;
		const ingredient: Ingredient = {
			id: ingredients.length + 1,
			description: this.newIngredient.description,
		};
		this.recipe.ingredients = [...ingredients, ingredient];
		this.newIngredient = {};
	}

	addNewPreparationStep(): void {
		const { preparationSteps } = this.recipe;
		const preparationStep: PreparationStep = {
			id: preparationSteps.length + 1,
			description: this.newPreparationStep.description,
		};
		this.recipe.preparationSteps = [...preparationSteps, preparationStep];
		this.newPreparationStep = {};
	}

	displaySelectFilterLabel(systemOption: SystemOption): string {
		const difficultyLevelLabel =
			environment.selectedLanguage === 'Portuguese'
				? systemOption.displayValuePortuguese
				: systemOption.displayValueEnglish;
		return transformFirstLetterInUppercase(difficultyLevelLabel);
	}

	removeIngredient(ingredient: Ingredient): void {
		this.recipe.ingredients = this.recipe.ingredients.filter(
			(item) => item.id !== ingredient.id
		);
	}

	removePreparationStep(preparationStep: PreparationStep): void {
		this.recipe.preparationSteps = this.recipe.preparationSteps.filter(
			(item) => item.id !== preparationStep.id
		);
	}

	private getDifficultyLevelOptions(): Observable<any> {
		return this.systemOptionsService.listDifficultyLevel().pipe(
			tap((difficultyLevelOptions: SystemOption[]) => {
				this.difficultyLevelOptions = difficultyLevelOptions;
			}),
			takeUntil(this.onDestroy$)
		);
	}

	private getMealTypelOptions(): Observable<any> {
		return this.systemOptionsService.listMealType().pipe(
			tap((mealTypeOptions: SystemOption[]) => {
				this.mealTypeOptions = mealTypeOptions;
			}),
			takeUntil(this.onDestroy$)
		);
	}
}
