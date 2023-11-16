import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MealServiceService } from 'src/app/services/meal-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent implements OnInit {
  
  meal !: Meal; 

  isLoggedIn : boolean = false;
  loggedUser : User = new User();
  isFavourite : boolean = false;
  
  idMeal !: number;

  constructor(private mealService : MealServiceService,
              private route : ActivatedRoute,
              private authenticationService : AuthenticationService,
              private userService : UserService){}
  

  
  ngOnInit(): void {
     this.route.params.subscribe(params=>{
      this.idMeal = params['id'];
      this.mealService.getMealById(this.idMeal).subscribe((data : Meal[])=>{
        this.meal = data[0];
        this.isFavourite = this.isMealInFavList();
        console.log('is favourite : ' , this.isFavourite);
      });
    }); 

    this.authenticationService.authStatusChangesIsLoggedIn.subscribe(result => {
      this.isLoggedIn = result;
    });

    this.authenticationService.authStatusChangesUser.subscribe(user => {
      this.loggedUser = user;
    });
    
  }


  addToFavList(idMeal : string) {
    this.loggedUser.mealsFavList.push(Number(idMeal));
    this.isFavourite = true;
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para agregar'),
      error => console.log(error));
  }

  removeFromFavList(idMeal : string) {
    this.loggedUser.mealsFavList = this.loggedUser.mealsFavList.filter(id => id === Number(idMeal));
    this.isFavourite = false;
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para eliminar'),
      error => console.log(error));
  }

  isMealInFavList() : boolean {
    let exists = false;

    if(this.loggedUser.mealsFavList){
      exists = !!this.loggedUser.mealsFavList.find(id => id === Number(this.meal.idMeal));
    }

    return exists;
  }
  

}
