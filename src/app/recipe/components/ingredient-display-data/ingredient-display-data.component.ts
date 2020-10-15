import { Ingredient } from './../../../core/models/ingredient.model';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-display-data',
  templateUrl: './ingredient-display-data.component.html',
  styleUrls: ['./ingredient-display-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientDisplayDataComponent implements OnInit {

  @Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
