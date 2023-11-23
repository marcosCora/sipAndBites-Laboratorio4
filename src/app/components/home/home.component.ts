import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { carouselImage } from 'src/app/models/carouselImage';
import { DrinkService } from 'src/app/services/drink.service';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images : carouselImage[] = [];
  dataLoaded : boolean = false;
  
  constructor(private drinkService : DrinkService,
             private mealService : MealService){}

  ngOnInit(): void {
    
    for(let i=0 ; i < 6 ; i++){
      this.images.push({ imageSrc: '', imageAlt: '' , imageId : '', type : ''});
    }

    for(let i=0 ; i < 6 ; i = i + 2){
      this.mealService.getRandomMeal().subscribe(meal => {
        this.images[i].imageSrc = meal.strMealThumb;
        this.images[i].imageAlt = meal.strMeal;
        this.images[i].imageId = meal.idMeal;
        this.images[i].type = 'meal'; 
        console.log(meal);
      });
    } 

    for(let i=1 ; i < 6 ; i = i + 2){
      this.drinkService.getRandomDrink().subscribe(drink => {
        this.images[i].imageSrc = drink.strDrinkThumb;
        this.images[i].imageAlt = drink.strDrink; 
        this.images[i].imageId = drink.idDrink; 
        this.images[i].type = 'drink'; 
        console.log("entra al subsribe");
     });
    } 

    setTimeout(()=> this.dataLoaded = true, 400);
  } 

}
