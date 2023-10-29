import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../models/drink';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  url : string = "https://www.thecocktaildb.com/api/json/v1/1";

  constructor(private http : HttpClient) { }
  
  getDrinksByName(name : string) : Observable<Drink[]> {
    return this.http.get<any>(`${this.url}/search.php?s=${name}`).pipe(
      map( (response : any) => {
        return response.drinks;
      })
    );
  }

  getDrinksByFirstLetter(firstLetter : string) : Observable<Drink[]> {
    return this.http.get<any>(`${this.url}/search.php?f=${firstLetter}`).pipe(
      map( (response : any) => {
        return response.drinks;
      })
    );
  }

  getDrinksByIngredient(ingredient : string) : Observable<Drink[]> {
    return this.http.get<any>(`${this.url}/filter.php?i=${ingredient}`).pipe(
      map( (response : any) => {
        return response.drinks;
      })
    );
  }

  getDrinksByAlcohol(drinkType : string) : Observable<Drink[]> {
    return this.http.get<any>(`${this.url}/filter.php?a=${drinkType}`).pipe(
      map( (response : any) => {
        return response.drinks;
      })
    );
  }

  getDrinksByCategory(category : string) : Observable<Drink[]> {
    return this.http.get<any>(`${this.url}/filter.php?c=${category}`).pipe(
      map( (response : any) => {
        return response.drinks;
      })
    );
  }

  getDrinkById(id : number) : Observable<Drink> {
    return this.http.get<any>(`${this.url}/lookup.php?i=${id}`).pipe(
      map( (response : any) => {
        return response.drinks;
      })
    );
  }

  


}
