import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealServiceService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-list-meal-component',
  templateUrl: './list-meal-component.component.html',
  styleUrls: ['./list-meal-component.component.css']
})
export class ListMealComponentComponent implements OnInit {

  mealList : Meal[] = [];
  nameMeal = '';
  constructor(private mealService : MealServiceService){}
 
  
  ngOnInit(): void {
    this.showMealsByName();
    //this.showMealById();
    //this.showMealByCategories();
    //this.showMealByFirstLetter();
    //this.showMealByIngredient();
  }
   showMealsByName(){
    this.mealService.getMealByName(this.nameMeal).subscribe((data : Meal[])=>{
      this.mealList = data;
      console.log('Name');
      console.log(this.mealList);
    });
   }

   showMealById(){
    this.mealService.getMealById(52977).subscribe((data : Meal[])=>{
      this.mealList = data;
      console.log('ID');
      console.log(this.mealList);
    });
   }

   showMealByCategories(){
    this.mealService.getMealByCategories().subscribe((data : Meal[])=>{
      this.mealList = data;
      console.log('Categories');
      console.log(this.mealList);
    });
   }

   showMealByFirstLetter(){
    this.mealService.getMealByFirstLetter('l').subscribe((data : Meal[])=>{
      this.mealList = data;
      console.log('Priemra letra');
      console.log(this.mealList);
    });
   }

   showMealByIngredient(){
    this.mealService.getMealByIngredient('onion').subscribe((data : Meal[])=>{
      this.mealList = data;
      console.log('Ingrediente');
      console.log(this.mealList);
    })
   }

}
