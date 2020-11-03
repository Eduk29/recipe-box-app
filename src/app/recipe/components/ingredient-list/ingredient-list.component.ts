import { Ingredient } from './../../../core/models/ingredient.model';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientListComponent implements OnInit {

  @Input() ingredients: Ingredient[];
  @Input() readOnly?: boolean = true;
  @Output() eventRemoveIngredient = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeIngredient(ingredient: Ingredient): void {
    this.eventRemoveIngredient.emit(ingredient);
  }


}
