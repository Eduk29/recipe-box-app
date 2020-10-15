export interface Ingredient {
  id?: number;
  name?: string;
  amount?: number;
  unitAmout?: string;
  alternativeIngredient?: Ingredient;
}
