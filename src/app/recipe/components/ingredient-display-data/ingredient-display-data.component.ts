import { Ingredient } from './../../../core/models/ingredient.model';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-display-data',
  templateUrl: './ingredient-display-data.component.html',
  styleUrls: ['./ingredient-display-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientDisplayDataComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Input() readOnly?: boolean = true;
  @Output() eventRemoveIngredient = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public removeIngredient(ingredient: Ingredient): void {
    this.eventRemoveIngredient.emit(ingredient);
  }

}
