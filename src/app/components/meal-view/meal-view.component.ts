import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MealServiceService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent implements OnInit {
  
  meal !: Meal; 
  isLoggedIn : boolean = false;
  loggedUser : User = new User();

  constructor(private mealService : MealServiceService,
              private route : ActivatedRoute,
              private autheticationService : AuthenticationService){}
  
  ngOnInit(): void {
     this.route.params.subscribe(params=>{
      let idMeal = params['id'];
      this.mealService.getMealById(idMeal).subscribe((data : Meal[])=>{
        this.meal = data[0];
      });
    }); 

    this.autheticationService.authStatusChangesIsLoggedIn.subscribe(result => {
      this.isLoggedIn = result;
    });
    
  }


  addToFavList(idMeal : string) {
    
  }
  

}
