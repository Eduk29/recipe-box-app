import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CoreModule } from './../core/core.module';
import { DifficultyIndicatorComponent } from './components/difficulty-indicator/difficulty-indicator.component';
import { IngredientDisplayDataComponent } from './components/ingredient-display-data/ingredient-display-data.component';
import {
  PreparationStepsDisplayDataComponent,
} from './components/preparation-steps-display-data/preparation-steps-display-data.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailCardComponent } from './components/recipe-detail-card/recipe-detail-card.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RelatedRecipesComponent } from './components/related-recipes/related-recipes.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeNewComponent } from './pages/recipe-new/recipe-new.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeService } from './services/recipe.service';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { PreparationStepsListComponent } from './components/preparation-steps-list/preparation-steps-list.component';


@NgModule({
  declarations: [
    DifficultyIndicatorComponent,
    HomeComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    RecipeDetailCardComponent,
    IngredientDisplayDataComponent,
    PreparationStepsDisplayDataComponent,
    RelatedRecipesComponent,
    RecipeNewComponent,
    RecipeFormComponent,
    IngredientListComponent,
    PreparationStepsListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    RecipeRoutingModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    RecipeService
  ]
})
export class RecipeModule { }
