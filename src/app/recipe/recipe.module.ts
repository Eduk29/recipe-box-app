import { RecipeService } from './services/recipe.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CoreModule } from './../core/core.module';
import { DifficultyIndicatorComponent } from './components/difficulty-indicator/difficulty-indicator.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailCardComponent } from './components/recipe-detail-card/recipe-detail-card.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { IngredientDisplayDataComponent } from './components/ingredient-display-data/ingredient-display-data.component';
import { PreparationStepsDisplayDataComponent } from './components/preparation-steps-display-data/preparation-steps-display-data.component';
import { RelatedRecipesComponent } from './components/related-recipes/related-recipes.component';


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
    RelatedRecipesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    RecipeRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    RecipeService
  ]
})
export class RecipeModule { }
