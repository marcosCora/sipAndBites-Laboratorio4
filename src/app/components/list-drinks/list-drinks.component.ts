import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DrinkFilterService } from 'src/app/services/drink-filter.service';
import { DrinkService } from 'src/app/services/drink.service';

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
              private authenticationService : AuthenticationService){}

  


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

    this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
      this.loggedUser = user;
      console.log(this.loggedUser);
      });

      this.authenticationService.authStatusChangesIsLoggedIn.subscribe((result : boolean) => {
        this.isLoggedIn = result;
        });
  }



  showDrinksByName(){
    this.drinkService.getDrinksByName("").subscribe((data : Drink[]) => {
      this.drinksList = data;
    });
  }

  showDrinksByFirstLetter(){
    this.drinkService.getDrinksByFirstLetter("a").subscribe((data : Drink[]) => {
      this.drinksList = data;
      console.log(this.drinksList);
    }
    );
  }

  showDrinksByIngredient(){
    this.drinkService.getDrinksByIngredient("gin").subscribe((data : Drink[]) => {
      this.drinksList = data;
      console.log(this.drinksList);
    }
    );
  }

  showAlcoholicDrinks(){
    this.drinkService.getDrinksByAlcohol("Alcoholic").subscribe((data : Drink[]) => {
      this.drinksList = data;
      console.log(this.drinksList);
    }
    );
  }

  showNonAlcoholicDrinks(){
    this.drinkService.getDrinksByAlcohol("Non_Alcoholic").subscribe((data : Drink[]) => {
      this.drinksList = data;
      console.log(this.drinksList);
    }
    );
  }

  showDrinksByCategory(){
    this.drinkService.getDrinksByCategoryOnly("Beer").subscribe((data : Drink[]) => {
      this.drinksList = data;
      console.log(this.drinksList);
    }
    );
  }

  showDrinkById(){
    this.drinkService.getDrinkById(11007).subscribe((data : Drink) => {
      this.drinksList[0] = data;
      console.log(this.drinksList);
    }
    );
  }

  addToFavList(idDrink : string){
    console.log("se agrego a fav!");
  }

}
