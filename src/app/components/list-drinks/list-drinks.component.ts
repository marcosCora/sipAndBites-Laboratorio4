import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
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
  constructor(private drinkService : DrinkService, private route : ActivatedRoute, private drinksFilter : DrinkFilterService){}
  loader : boolean = true;
  


  ngOnInit(): void {
    this.loader = true;
    console.log(this.loader);
    
    this.route.params.subscribe(params =>{
      this.showDrinksByName();
      this.loader = false;
      console.log(this.loader);
    });

    this.drinksFilter.arrayDrink$.subscribe((response : Drink[]) =>{
      if(response){
        this.drinksList = response;
        this.searchCheck = true;
      }else{
        this.searchCheck = false;
      }
      
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

}
