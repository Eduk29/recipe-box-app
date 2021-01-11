import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SystemOption } from '../models/system-option.model';

@Injectable({
  providedIn: 'root'
})
export class SystemOptionsService {

  private urlAPI: string;

  constructor(private httpRequest: HttpClient) {
    this.urlAPI = `${environment.urlApi}`;
  }

  listDifficultyLevel(): Observable<SystemOption[]> {
    const url = `${this.urlAPI}/difficulty-level`;
    return this.httpRequest.get<SystemOption[]>(url);
  }

  listMealType(): Observable<SystemOption[]> {
    const url = `${this.urlAPI}/meal-type`;
    return this.httpRequest.get<SystemOption[]>(url);
  }
}
