import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { MealServiceService } from 'src/app/services/meal-service.service';
import { MealSharingServiceService } from 'src/app/services/meal-sharing-service.service';

@Component({
  selector: 'app-list-meal-component',
  templateUrl: './list-meal-component.component.html',
  styleUrls: ['./list-meal-component.component.css']
})
export class ListMealComponentComponent implements OnInit {

  mealList : Meal[] = [];
  nameMeal = '';
  constructor(private mealSharing : MealSharingServiceService, private route : ActivatedRoute){}
  //constructor(private mealService : MealServiceService, private route : ActivatedRoute){}
 
  
  ngOnInit(): void {

    this.route.params.subscribe(params =>{
    this.mealSharing.showMealsByName(this.nameMeal);
    this.mealSharing.getListMeal().subscribe(data => {
      this.mealList = data;
    });
    }); 
  }

}
