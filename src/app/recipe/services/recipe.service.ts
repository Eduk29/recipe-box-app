import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Recipe } from './../../core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private urlAPI: string;

  constructor(private httpRequest: HttpClient) {
    this.urlAPI = `${environment.urlApi}/recipe`;
  }

  listAll(): Observable<Recipe[]> {
    return this.httpRequest.get<Recipe[]>(this.urlAPI);
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.urlAPI}/${id}`;
    return this.httpRequest.get<Recipe>(url);
  }
}
