import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { FoodManagementServiceService } from 'src/app/services/food-management-service.service';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  
  meals : Meal[] = [];
  //constructor(private foodManagement : FoodManagementServiceService){}
  constructor(private foodManagement : FoodServiceService){}
  
  ngOnInit(): void {
    /* this.meals = this.foodManagement.meals;
    console.log('hola');
    console.log(this.meals); */
    this.foodManagement.getMealsByName('r')
    .then((response)=>{
      console.log(response);
      
      this.meals = JSON.parse(response);
    })
    .catch((response)=>{
      console.log("Error request", response);
    })
    
  }
   

  }




