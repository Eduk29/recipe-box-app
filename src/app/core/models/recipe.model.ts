import { PreparationStep } from './preparationStep.model';
import { Ingredient } from './ingredient.model';
import { SystemOption } from './system-option.model';
export interface Recipe {
  id?: number;
  name?: string;
  mealType?: SystemOption;
  serverTo?: number;
  difficultyLevel?: SystemOption;
  ingredients?: Ingredient[];
  preparationSteps?: PreparationStep[];
  urlImage?: string;
}
