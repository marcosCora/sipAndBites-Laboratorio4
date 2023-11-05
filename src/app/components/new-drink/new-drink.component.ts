import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Drink } from 'src/app/models/drink';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-new-drink',
  templateUrl: './new-drink.component.html',
  styleUrls: ['./new-drink.component.css']
})
export class NewDrinkComponent implements OnInit {
  newDrinkForm !: FormGroup;
  loggedUser : User = new User();
  newDrink : Drink = new Drink(); 
  

  constructor(private authenticationService : AuthenticationService){}
  
  
  ngOnInit(): void {
    
    this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
      this.loggedUser = user;
      });

      this.newDrinkForm = new FormGroup({
        'strDrink' : new FormControl(this.newDrink.strDrink, [Validators.required]),
        'strCategory' : new FormControl(this.newDrink.strCategory),
        'strAlcoholic' : new FormControl(this.newDrink.strAlcoholic),
        'strGlass' : new FormControl(this.newDrink.strGlass),
        'strInstructions' : new FormControl(this.newDrink.strInstructions, [Validators.required]),
        'strDrinkThumbs' : new FormControl(this.newDrink.strDrinkThumb),
        'strIngredient1' : new FormControl(this.newDrink.strIngredient1, [Validators.required]),
        'strIngredient2' : new FormControl(this.newDrink.strIngredient2),
        'strIngredient3' : new FormControl(this.newDrink.strIngredient3),
        'strIngredient4' : new FormControl(this.newDrink.strIngredient4),
        'strIngredient5' : new FormControl(this.newDrink.strIngredient5),
        'strIngredient6' : new FormControl(this.newDrink.strIngredient6),
        'strIngredient7' : new FormControl(this.newDrink.strIngredient7),
        'strIngredient8' : new FormControl(this.newDrink.strIngredient8),
        'strIngredient9' : new FormControl(this.newDrink.strIngredient9),
        'strIngredient10' : new FormControl(this.newDrink.strIngredient10),
        'strIngredient11' : new FormControl(this.newDrink.strIngredient11),
        'strIngredient12' : new FormControl(this.newDrink.strIngredient12),
        'strIngredient13' : new FormControl(this.newDrink.strIngredient13),
        'strIngredient14' : new FormControl(this.newDrink.strIngredient14),
        'strIngredient15' : new FormControl(this.newDrink.strIngredient15),
        'strMeasure1' : new FormControl(this.newDrink.strMeasure1, [Validators.required]),
        'strMeasure2' : new FormControl(this.newDrink.strMeasure2),
        'strMeasure3' : new FormControl(this.newDrink.strMeasure3),
        'strMeasure4' : new FormControl(this.newDrink.strMeasure4),
        'strMeasure5' : new FormControl(this.newDrink.strMeasure5),
        'strMeasure6' : new FormControl(this.newDrink.strMeasure6),
        'strMeasure7' : new FormControl(this.newDrink.strMeasure7),
        'strMeasure8' : new FormControl(this.newDrink.strMeasure8),
        'strMeasure9' : new FormControl(this.newDrink.strMeasure9),
        'strMeasure10' : new FormControl(this.newDrink.strMeasure10),
        'strMeasure11' : new FormControl(this.newDrink.strMeasure11),
        'strMeasure12' : new FormControl(this.newDrink.strMeasure12),
        'strMeasure13' : new FormControl(this.newDrink.strMeasure13),
        'strMeasure14' : new FormControl(this.newDrink.strMeasure14),
        'strMeasure15' : new FormControl(this.newDrink.strMeasure15)
      }
        


      );

  }

  addRecipe() : void {

  }

}
