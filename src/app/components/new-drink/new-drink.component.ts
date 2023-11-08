import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Drink } from 'src/app/models/drink';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomValidator } from '../custom-validator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-drink',
  templateUrl: './new-drink.component.html',
  styleUrls: ['./new-drink.component.css']
})
export class NewDrinkComponent implements OnInit {
  newDrinkForm !: FormGroup;
  loggedUser : User = new User();
  newDrink : Drink = new Drink(); 
  numberOfIngredients : number = 1;
  

  constructor(private authenticationService : AuthenticationService,
              private userService : UserService,
              private router : Router){}
  
  
  ngOnInit(): void {
    
    this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
      this.loggedUser = user;

      console.log(this.loggedUser);
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
      });

  }

  addRecipe() : void {


    if(this.newDrinkForm.invalid){
      return;
    }
    
    this.newDrink.strDrink = this.newDrinkForm.controls['strDrink'].value;
    this.newDrink.strCategory = this.newDrinkForm.controls['strCategory'].value;

    if(this.newDrinkForm.controls['strAlcoholic'].value == true){
      this.newDrink.strAlcoholic = 'Alcoholic';
    } else {
      this.newDrink.strAlcoholic = 'Non Alcoholic';
    }

    
    this.newDrink.strGlass = this.newDrinkForm.controls['strGlass'].value;
    this.newDrink.strInstructions = this.newDrinkForm.controls['strInstructions'].value;
    //this.newDrink.strDrinkThumb = this.newDrinkForm.controls['strDrinkThumb'].value; //ver como se guarda

    this.newDrink.strIngredient1 = this.newDrinkForm.controls['strIngredient1'].value; 
    this.newDrink.strIngredient2 = this.newDrinkForm.controls['strIngredient2'].value; 
    this.newDrink.strIngredient3 = this.newDrinkForm.controls['strIngredient3'].value;
    this.newDrink.strIngredient4 = this.newDrinkForm.controls['strIngredient4'].value; 
    this.newDrink.strIngredient5 = this.newDrinkForm.controls['strIngredient5'].value; 
    this.newDrink.strIngredient6 = this.newDrinkForm.controls['strIngredient6'].value; 
    this.newDrink.strIngredient7 = this.newDrinkForm.controls['strIngredient7'].value; 
    this.newDrink.strIngredient8 = this.newDrinkForm.controls['strIngredient8'].value; 
    this.newDrink.strIngredient9 = this.newDrinkForm.controls['strIngredient9'].value; 
    this.newDrink.strIngredient10 = this.newDrinkForm.controls['strIngredient10'].value; 
    this.newDrink.strIngredient11 = this.newDrinkForm.controls['strIngredient11'].value; 
    this.newDrink.strIngredient12 = this.newDrinkForm.controls['strIngredient12'].value; 
    this.newDrink.strIngredient13 = this.newDrinkForm.controls['strIngredient13'].value; 
    this.newDrink.strIngredient14 = this.newDrinkForm.controls['strIngredient14'].value; 
    this.newDrink.strIngredient15 = this.newDrinkForm.controls['strIngredient15'].value; 

    this.newDrink.strMeasure1 = this.newDrinkForm.controls['strMeasure1'].value;
    this.newDrink.strMeasure2 = this.newDrinkForm.controls['strMeasure2'].value;
    this.newDrink.strMeasure3 = this.newDrinkForm.controls['strMeasure3'].value;
    this.newDrink.strMeasure4 = this.newDrinkForm.controls['strMeasure4'].value;
    this.newDrink.strMeasure5 = this.newDrinkForm.controls['strMeasure5'].value;
    this.newDrink.strMeasure6 = this.newDrinkForm.controls['strMeasure6'].value;
    this.newDrink.strMeasure7 = this.newDrinkForm.controls['strMeasure7'].value;
    this.newDrink.strMeasure8 = this.newDrinkForm.controls['strMeasure8'].value;
    this.newDrink.strMeasure9 = this.newDrinkForm.controls['strMeasure9'].value;
    this.newDrink.strMeasure10 = this.newDrinkForm.controls['strMeasure10'].value;
    this.newDrink.strMeasure11 = this.newDrinkForm.controls['strMeasure11'].value;
    this.newDrink.strMeasure12 = this.newDrinkForm.controls['strMeasure12'].value;
    this.newDrink.strMeasure13 = this.newDrinkForm.controls['strMeasure13'].value;
    this.newDrink.strMeasure14 = this.newDrinkForm.controls['strMeasure14'].value;
    this.newDrink.strMeasure15 = this.newDrinkForm.controls['strMeasure15'].value;  


    this.loggedUser.drinks.push(this.newDrink);

    this.userService.putUser(this.loggedUser).subscribe(response => this.router.navigate(['userRecipes']), 
    error => console.log(error));
    console.log(this.newDrink);

  }

  addIngredient(){
    this.numberOfIngredients++;
  }

}
