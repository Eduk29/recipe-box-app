import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Ingredient } from './../../../core/models/ingredient.model';

@Component({
	selector: 'app-add-alternative-ingredient-dialog',
	templateUrl: './add-alternative-ingredient-dialog.component.html',
	styleUrls: ['./add-alternative-ingredient-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAlternativeIngredientDialogComponent implements OnInit {

  public ingredient: Ingredient;
  public newAlternativeIngredient: Ingredient;

	constructor(
    public dialogRef: MatDialogRef<AddAlternativeIngredientDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data) {
      this.ingredient = this.data;
      this.newAlternativeIngredient = {};
    }

	ngOnInit(): void { }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
