import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {
  
  constructor(private http : HttpClient) { }

  apiMealUrl = 'https://www.themealdb.com/api/json/v1/1/';

  getMealByName(name : string) : Observable<Meal[]>{
    let urlComplete = this.apiMealUrl + 'search.php?s=' + name;
    return this.http.get<any>(urlComplete).pipe(
      map((response : any)=>{
      return response.meals;
    })
     );
  }

  getMealById(id : number) : Observable<Meal[]>{
    let urlComplete = this.apiMealUrl + 'lookup.php?i=' + id
    return this.http.get<any>(urlComplete).pipe(
      map((response : any)=>{
        return response.meals
      })
    );
  }

  getMealByCategorieOnly(categorie : string) : Observable<Meal[]>{
    let urlComplete = this.apiMealUrl + 'filter.php?c=' + categorie;
    return this.http.get<any>(urlComplete).pipe(
      map((response : any)=>{ 
        return response.meals
      })
    );
  }

  getMealByCategories() : Observable<Meal[]>{
    let urlComplete = this.apiMealUrl + 'categories.php';
    return this.http.get<any>(urlComplete).pipe(
      map((response : any)=>{
        return response.categories
      })
    );
  }

getMealByFirstLetter(firstLetter : string) : Observable<Meal[]>{
  let urlComplete = this.apiMealUrl + 'search.php?f=' + firstLetter;
  return this.http.get<any>(urlComplete).pipe(
    map((response : any)=>{
      return response.meals
    })
  );
}

getMealByIngredient(ingredient : string) : Observable<Meal[]>{
  let urlComplete = this.apiMealUrl + 'filter.php?i=' + ingredient;
  return this.http.get<any>(urlComplete).pipe(
    map((response : any)=>{
      return response.meals
    })
  );
}

getMealByCountry(country : string) : Observable<Meal[]>{
  let urlComplete = this.apiMealUrl + 'filter.php?a=' + country;
  return this.http.get<any>(urlComplete).pipe(
    map((response : any)=>{
      return response.meals
    })
  );
} 

}
