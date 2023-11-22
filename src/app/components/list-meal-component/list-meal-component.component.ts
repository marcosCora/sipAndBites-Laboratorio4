import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MealFilterService } from 'src/app/services/meal-filter.service';
import { MealServiceService } from 'src/app/services/meal-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-meal-component',
  templateUrl: './list-meal-component.component.html',
  styleUrls: ['./list-meal-component.component.css']
})
export class ListMealComponentComponent implements OnInit {

  mealList : Meal[] = [];
  searchCheck : boolean = true;
  nameMeal = '';
  isLoggedIn : boolean = false;
  loggedUser : User = new User();

  constructor(private mealService : MealServiceService,
              private filterService : MealFilterService,
              private authenticationService : AuthenticationService,
              private userService : UserService){}
 
  
  ngOnInit(): void {
    this.showMealsByName();
    
    this.filterService.filteredMeals$.subscribe((data : Meal[])=>{
      if(data){
        this.mealList = data;
        this.searchCheck = true;
      }else{
        this.searchCheck = false;
      }   
    });

    this.loggedUser = this.authenticationService.getCurrentUser();
    if(this.loggedUser){
      this.isLoggedIn = true;
    }
  }

   showMealsByName(){
    this.mealService.getMealByName(this.nameMeal).subscribe((data : Meal[])=>{
      this.mealList = data;
    });
   }

   showMealById(){
    this.mealService.getMealById(52977).subscribe((data : Meal[])=>{
      this.mealList = data;
    });
   }

   showMealByCategories(){
    this.mealService.getMealByCategories().subscribe((data : Meal[])=>{
      this.mealList = data;
    });
   }

   showMealByFirstLetter(){
    this.mealService.getMealByFirstLetter('l').subscribe((data : Meal[])=>{
      this.mealList = data;
    });
   }

   showMealByIngredient(){
    this.mealService.getMealByIngredient('onion').subscribe((data : Meal[])=>{
      this.mealList = data;
    })
   }

   addToFavList(idMeal : string){
    this.loggedUser.mealsFavList.push(Number(idMeal));
    this.authenticationService.login(this.loggedUser);
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para agregar'),
      error => console.log(error));
  }

  isMealInFavList(idMeal : string) : boolean {
    let exists = false;

    if(this.loggedUser.mealsFavList){
      exists = !!this.loggedUser.mealsFavList.find(mealId => mealId === Number(idMeal));
    }

    return exists;
  }

  removeFromFavList(idMeal : string) : void {
    this.loggedUser.mealsFavList = this.loggedUser.mealsFavList.filter(mealId => mealId != Number(idMeal));
    this.authenticationService.login(this.loggedUser);
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para eliminar'),
      error => console.log(error));
  }

}
