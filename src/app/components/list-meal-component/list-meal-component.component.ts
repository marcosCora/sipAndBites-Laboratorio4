import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MealFilterService } from 'src/app/services/meal-filter.service';
import { MealServiceService } from 'src/app/services/meal-service.service';

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
              private authenticationService : AuthenticationService){}
 
  
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

    this.authenticationService.authStatusChangesIsLoggedIn.subscribe(result => {
      this.isLoggedIn = result;
    });
  }

   showMealsByName(){
    this.mealService.getMealByName(this.nameMeal).subscribe((data : Meal[])=>{
      this.mealList = data;
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

   addToFavList(idMeal : string) {
    
   }

}
