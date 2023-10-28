import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  constructor(private http : HttpClient) { }

  apiMealUrl = 'https://www.themealdb.com/api/json/v1/1/';

  getMealByName(name : string) : Observable<Meal[]>{
    let urlCompleta = this.apiMealUrl + 'search.php?s=' + name;
    return this.http.get<any>(urlCompleta).pipe(
      map((response : any)=>{
      return response.meals;
    })
     );
  }

}
