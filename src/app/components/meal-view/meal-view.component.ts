import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MealServiceService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent implements OnInit {
  
  meal !: Meal; 
  userLog : boolean = false;
  idMeal !: number;
  constructor(private mealService : MealServiceService ,
              private route : ActivatedRoute,
              private authenticantioUser : AuthenticationService){}
  
  ngOnInit(): void {
     this.route.params.subscribe(params=>{
      this.idMeal = params['id'];
      this.mealService.getMealById(this.idMeal).subscribe((data : Meal[])=>{
        this.meal = data[0];
        this.authenticantioUser.authStatusChangesIsLoggedIn.subscribe(response =>{
          this.userLog = response;
        })

      })
    }) 
    
  }

  

}
