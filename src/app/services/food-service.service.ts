import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient) { }
  
  apiUrl = 'www.themealdb.com/api/json/v1/1/';
  //search.php?s=Arrabiata

  getFoodByName(name : string): Promise<any>{
    let apiUrlCompleta = this.apiUrl+'search.php?s='+name;
    return this.http.get(apiUrlCompleta).toPromise();
  }
