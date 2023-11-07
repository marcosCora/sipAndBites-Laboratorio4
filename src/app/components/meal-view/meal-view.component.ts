import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { MealServiceService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent implements OnInit {
  
  meal !: Meal; 
  constructor(private mealService : MealServiceService ,private route : ActivatedRoute){}
  
  ngOnInit(): void {
     this.route.params.subscribe(params=>{
      let idMeal = params['id'];
      this.mealService.getMealById(idMeal).subscribe((data : Meal[])=>{
        this.meal = data[0];
      })
    }) 
    
  }

  

}
