import { Injectable, OnInit } from '@angular/core';
import { FoodServiceService } from './food-service.service';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class FoodManagementServiceService implements OnInit {

  meals : Meal[] = [];
  constructor(private http : FoodServiceService) { }
  
  ngOnInit(): void {
      this.http.getMealsByName('r')
        .then((response)=>{
          console.log(response);
          
          this.meals = JSON.parse(response);
        })
        .catch((response)=>{
          console.log("Error request");
        })
        
    
    }
/* 
    this.http.getFoodByName('r').subscribe((response)=>{
      this.meals = response.map((data)=>{
        let auxMeal : Meal = {
          idMeal : data.idMeal,
          strMeal : data.strMeal,
          strDrinkAlternate : data.strDrinkAlternate,
          strCategory : data.strCategory,
          strArea : data.strArea,
          strInstructions : data.strInstructions,
          strMealThumb : data.strMealThumb,
          strTags : data.strTags,
          strYoutube : data.strYoutube,
          strIngredients : [],
          strMeasures : [],
          strImageSource : data.strImageSource,
          strCreativeCommonsConfirmed : data.strCreativeCommonsConfirmed,
          dateModified : data.dateModified
        };
        let i = 0;
        while(i<=20 && data['strIngredient' + i] && data['strMeasure' + i]){
          auxMeal.strIngredients.push(data['strIngredient' + i]);
          auxMeal.strIngredients.push(data['strMeasure' + i]);
          i++;
        }
        return auxMeal;
      }) */


  }





