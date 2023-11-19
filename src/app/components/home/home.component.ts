import { Component, OnInit } from '@angular/core';
import { carouselImage } from 'src/app/models/carouselImage';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //images !: carouselImage[];
  
  images = [
    {
      imageSrc : "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
      imageAlt : "Ace" 
    },
    {
      imageSrc : "https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg",
      imageAlt : "Arrabiata" 
    },
    {
      imageSrc : "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xxsxqy1472668106.jpg",
      imageAlt : "747" 
    },
    {
      imageSrc : "https:\/\/www.themealdb.com\/images\/media\/meals\/rwuyqx1511383174.jpg",
      imageAlt : "pancakes" 
    },
    {
      imageSrc : "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5a3vg61504372070.jpg",
      imageAlt : "b52" 
    },
    {
      imageSrc : "\/\/www.themealdb.com\/images\/media\/meals\/urzj1d1587670726.jpg",
      imageAlt : "bigmac" 
    }
  ] 

/*  constructor(private drinkService : DrinkService){}

  ngOnInit(): void {
    
    for(let i=0 ; i < 6 ; i ++){
      this.drinkService.getRandomDrink().subscribe(drink => {
        this.images[i].imageSrc = drink.strDrinkThumb;
        this.images[i].imageAlt = drink.strDrink; 
      });
    } 
  }*/


}
