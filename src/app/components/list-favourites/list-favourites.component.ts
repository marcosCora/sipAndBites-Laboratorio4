import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  loggedUser: User = new User;

  showMealsFavList: boolean = true;
  showDrinksFavList: boolean = true;

  mealFav: Meal[] = [];
  drinkFav: Drink[] = [];


  constructor(private userService: UserService,
    private authenticationService: AuthenticationService,
    private drinkService: DrinkService,
    private mealService: MealServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.loggedUser = this.authenticationService.getCurrentUser();
    if (this.loggedUser) {
      this.loggedUser.drinksFavList.forEach(id => {
        this.drinkService.getDrinkById(id).subscribe(result => {
          
          
          this.drinkFav.push(result);
        });
      });

      this.loggedUser.mealsFavList.forEach(id => {
        this.mealService.getMealById(id).subscribe(result => {
          this.mealFav.push(result[0]);
        });
      });

      this.drinkFav.forEach(r => console.log('drinkFav:' + r.idDrink));
      console.log('drinksFavList:');
      this.loggedUser.drinksFavList.forEach(id => console.log(id));

      this.mealFav.forEach(r => console.log('mealFav:' + r.idMeal));
      console.log('mealsFavList:');
      this.loggedUser.mealsFavList.forEach(id => console.log(id));
    }
  }

  showMealList() {
    if (this.showMealsFavList) {
      this.showMealsFavList = false;
    } else {
      this.showMealsFavList = true;
    }
  }

  showDrinkList() {
    if (this.showDrinksFavList) {
      this.showDrinksFavList = false;
    } else {
      this.showDrinksFavList = true;
    }
  }

  getDrinkById(idDrink: number): void {
    this.drinkService.getDrinkById(idDrink).subscribe(result => {
      return result;
    });
  }

  getMealById(idMeal: number): void {
    this.mealService.getMealById(idMeal).subscribe(result => {
      return result;
    });
  }

  removeDrinkFromFavList(idToDelete: string): void {

    if (this.showMealsFavList === false && this.drinkFav.length === 1) {
      this.showMealsFavList = true;
    }

    console.log('drinksFavList:');
    this.loggedUser.drinksFavList.forEach(id => console.log(id));

    this.loggedUser.drinksFavList = this.loggedUser.drinksFavList.filter(id => id !== Number(idToDelete));
    this.drinkFav = this.drinkFav.filter(drink => drink.idDrink !== idToDelete);

    console.log('remove Drink:');
    this.drinkFav.forEach(r => console.log('drinkFav:' + r.idDrink));
    console.log('drinksFavList:');
    this.loggedUser.drinksFavList.forEach(id => console.log(id));


    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para eliminar'),
      error => console.log(error));

  }

  removeMealFromFavList(idToDelete: string): void {

    if (this.showDrinksFavList === false && this.mealFav.length === 1) {
      this.showDrinksFavList = true;
    }

    console.log('mealsFavList:');
    this.loggedUser.mealsFavList.forEach(id => console.log(id));

    this.loggedUser.mealsFavList = this.loggedUser.mealsFavList.filter(id => id !== Number(idToDelete));
    this.mealFav = this.mealFav.filter(meal => meal.idMeal !== idToDelete);

    console.log('remove Meal:');
    this.mealFav.forEach(r => console.log('mealFav:' + r.idMeal));
    console.log('mealsFavList:');
    this.loggedUser.mealsFavList.forEach(id => console.log(id));

    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para eliminar'),
      error => console.log(error));

  }
}
