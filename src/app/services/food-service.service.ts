import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  meals : Meal[] = [];
  constructor(private http: HttpClient) { }
  
  
  apiUrl = 'www.themealdb.com/api/json/v1/1/';
  //search.php?s=Arrabiata
  
  getMealsByName(name : string) : Promise<any>{
    //return this.http.get('www.themealdb.com/api/json/v1/1/search.php?s=r')
    return this.http.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .toPromise();
  }


  /*
  getFoodByName(name : string){
    //let apiUrlCompleta = this.apiUrl+'search.php?s='+name;
    let apiUrlCompleta = 'www.themealdb.com/api/json/v1/1/search.php?s=r';
    return this.http.get('www.themealdb.com/api/json/v1/1/search.php?s=ar');
  }*/



}