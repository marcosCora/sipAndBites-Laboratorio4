import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealServiceService } from 'src/app/services/meal-service.service';


@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  
  meals : Meal[] = [];
  nameMeal = '';
  constructor(private mealService : MealServiceService){}
 
  
  ngOnInit(): void {
    this.showMeals();
  }
   showMeals(){
    this.mealService.getMealByName(this.nameMeal).subscribe((data : Meal[])=>{
      this.meals = data;
      console.log(this.meals);
    })
   }
  }




