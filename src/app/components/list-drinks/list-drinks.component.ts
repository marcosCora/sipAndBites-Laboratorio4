import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DrinkFilterService } from 'src/app/services/drink-filter.service';
import { DrinkService } from 'src/app/services/drink.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-drinks',
  templateUrl: './list-drinks.component.html',
  styleUrls: ['./list-drinks.component.css']
})
export class ListDrinksComponent implements OnInit{

  drinksList : Drink[] = [];
  searchCheck : boolean = true;
  loggedUser : User = new User();
  isLoggedIn : boolean = false;

  constructor(private drinkService : DrinkService, 
              private route : ActivatedRoute, 
              private drinksFilter : DrinkFilterService,
              private authenticationService : AuthenticationService,
              private userService : UserService){}


  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.showDrinksByName();
    });

    this.drinksFilter.arrayDrink$.subscribe((response : Drink[]) =>{
      if(response){
        this.drinksList = response;
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



  showDrinksByName(){
    this.drinkService.getDrinksByName("").subscribe((data : Drink[]) => {
      this.drinksList = data;
    });
  }

  showDrinksByFirstLetter(){
    this.drinkService.getDrinksByFirstLetter("a").subscribe((data : Drink[]) => {
      this.drinksList = data;
    }
    );
  }

  showDrinksByIngredient(){
    this.drinkService.getDrinksByIngredient("gin").subscribe((data : Drink[]) => {
      this.drinksList = data;
    }
    );
  }

  showAlcoholicDrinks(){
    this.drinkService.getDrinksByAlcohol("Alcoholic").subscribe((data : Drink[]) => {
      this.drinksList = data;
    }
    );
  }

  showNonAlcoholicDrinks(){
    this.drinkService.getDrinksByAlcohol("Non_Alcoholic").subscribe((data : Drink[]) => {
      this.drinksList = data;
    }
    );
  }

  showDrinksByCategory(){
    this.drinkService.getDrinksByCategoryOnly("Beer").subscribe((data : Drink[]) => {
      this.drinksList = data;

    }
    );
  }

  showDrinkById(){
    this.drinkService.getDrinkById(11007).subscribe((data : Drink) => {
      this.drinksList[0] = data;

    }
    );
  }

  addToFavList(idDrink : string){
    this.loggedUser.drinksFavList.push(Number(idDrink));
    this.authenticationService.login(this.loggedUser);
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para agregar'),
      error => console.log(error));
  }

  isDrinkInFavList(idDrink : string) : boolean {
    let exists = false;

    if(this.loggedUser.drinksFavList !== null){
      exists = !!this.loggedUser.drinksFavList.find(id => id === Number(idDrink));
    }

    return exists;
  }

  removeFromFavList(idDrink : string) : void {
    this.loggedUser.drinksFavList = this.loggedUser.drinksFavList.filter(id => id !== Number(idDrink));
    this.authenticationService.login(this.loggedUser);
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para eliminar'),
      error => console.log(error));
  }

}
