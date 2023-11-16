import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Drink } from 'src/app/models/drink';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DrinkService } from 'src/app/services/drink.service';
import { MealServiceService } from 'src/app/services/meal-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-favourites',
  templateUrl: './list-favourites.component.html',
  styleUrls: ['./list-favourites.component.css']
})
export class ListFavouritesComponent {
    loggedUser : User = new User;
    showMealsFavList : boolean = true;
    showDrinksFavList : boolean = true;
    mealFav : Meal[] = [];
    drinkFav : Drink[] = [];
    

    constructor(private userService : UserService,
                private authenticationService : AuthenticationService,
                private drinkService : DrinkService,
                private mealService : MealServiceService){}

    ngOnInit(): void {
      this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
        this.loggedUser = user;
        
        user.drinksFavList.forEach(id => {
          this.drinkService.getDrinkById(id).subscribe(result => {
            this.drinkFav.push(result);
          });
        });

        user.mealsFavList.forEach(id => {
          this.mealService.getMealById(id).subscribe(result => {
            this.mealFav.push(result[0]);
          });
      });
    })
  }

    showMealList(){
      if(this.showMealsFavList){
        this.showMealsFavList = false;
      }else{
        this.showMealsFavList = true;
      }
    }

    showDrinkList(){
      if(this.showDrinksFavList){
        this.showDrinksFavList = false;
      }else{
        this.showDrinksFavList = true;
      }
    }

    getDrinkById(idDrink : number) : void {
      this.drinkService.getDrinkById(idDrink).subscribe( result => {
        return result;
      });
    }

    getMealById(idMeal : number) : void {
      this.mealService.getMealById(idMeal).subscribe( result => {
        return result;
      });
    }
}
