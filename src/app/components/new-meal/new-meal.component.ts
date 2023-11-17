import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent {
  newMealForm !: FormGroup;
  loggedUser : User = new User();
  newMeal : Meal = new Meal(); 
  numberOfIngredients : number = 1;
  

  constructor(private authenticationService : AuthenticationService,
              private userService : UserService,
              private router : Router){}
  
  
  ngOnInit(): void {
    
    this.loggedUser = this.authenticationService.getCurrentUser();

    /* this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
      this.loggedUser = user;

      console.log(this.loggedUser);
      }); */

      this.newMealForm = new FormGroup({
        'strMeal' : new FormControl(this.newMeal.strMeal, [Validators.required]),
        'strCategory' : new FormControl(this.newMeal.strCategory),
        'strArea' : new FormControl(this.newMeal.strArea),
        'strInstructions' : new FormControl(this.newMeal.strInstructions, [Validators.required]),
        'strMealThumbs' : new FormControl(this.newMeal.strMealThumb),
        'strIngredient1' : new FormControl(this.newMeal.strIngredient1, [Validators.required]),
        'strIngredient2' : new FormControl(this.newMeal.strIngredient2),
        'strIngredient3' : new FormControl(this.newMeal.strIngredient3),
        'strIngredient4' : new FormControl(this.newMeal.strIngredient4),
        'strIngredient5' : new FormControl(this.newMeal.strIngredient5),
        'strIngredient6' : new FormControl(this.newMeal.strIngredient6),
        'strIngredient7' : new FormControl(this.newMeal.strIngredient7),
        'strIngredient8' : new FormControl(this.newMeal.strIngredient8),
        'strIngredient9' : new FormControl(this.newMeal.strIngredient9),
        'strIngredient10' : new FormControl(this.newMeal.strIngredient10),
        'strIngredient11' : new FormControl(this.newMeal.strIngredient11),
        'strIngredient12' : new FormControl(this.newMeal.strIngredient12),
        'strIngredient13' : new FormControl(this.newMeal.strIngredient13),
        'strIngredient14' : new FormControl(this.newMeal.strIngredient14),
        'strIngredient15' : new FormControl(this.newMeal.strIngredient15),
        'strIngredient16' : new FormControl(this.newMeal.strIngredient16),
        'strIngredient17' : new FormControl(this.newMeal.strIngredient17),
        'strIngredient18' : new FormControl(this.newMeal.strIngredient18),
        'strIngredient19' : new FormControl(this.newMeal.strIngredient19),
        'strIngredient20' : new FormControl(this.newMeal.strIngredient20),
        'strMeasure1' : new FormControl(this.newMeal.strMeasure1, [Validators.required]),
        'strMeasure2' : new FormControl(this.newMeal.strMeasure2),
        'strMeasure3' : new FormControl(this.newMeal.strMeasure3),
        'strMeasure4' : new FormControl(this.newMeal.strMeasure4),
        'strMeasure5' : new FormControl(this.newMeal.strMeasure5),
        'strMeasure6' : new FormControl(this.newMeal.strMeasure6),
        'strMeasure7' : new FormControl(this.newMeal.strMeasure7),
        'strMeasure8' : new FormControl(this.newMeal.strMeasure8),
        'strMeasure9' : new FormControl(this.newMeal.strMeasure9),
        'strMeasure10' : new FormControl(this.newMeal.strMeasure10),
        'strMeasure11' : new FormControl(this.newMeal.strMeasure11),
        'strMeasure12' : new FormControl(this.newMeal.strMeasure12),
        'strMeasure13' : new FormControl(this.newMeal.strMeasure13),
        'strMeasure14' : new FormControl(this.newMeal.strMeasure14),
        'strMeasure15' : new FormControl(this.newMeal.strMeasure15),
        'strMeasure16' : new FormControl(this.newMeal.strMeasure16),
        'strMeasure17' : new FormControl(this.newMeal.strMeasure17),
        'strMeasure18' : new FormControl(this.newMeal.strMeasure18),
        'strMeasure19' : new FormControl(this.newMeal.strMeasure19),
        'strMeasure20' : new FormControl(this.newMeal.strMeasure20)
      });

  }

  addRecipe() : void {


    if(this.newMealForm.invalid){
      return;
    }
    
    this.newMeal.strMeal = this.newMealForm.controls['strMeal'].value;
    this.newMeal.strCategory = this.newMealForm.controls['strCategory'].value;
    this.newMeal.strArea = this.newMealForm.controls['strArea'].value;
    //this.newMeal.strMealThumb = this.newMealForm.controls['strMealThumb'].value;
    this.newMeal.strInstructions = this.newMealForm.controls['strInstructions'].value; 

    this.newMeal.strIngredient1 = this.newMealForm.controls['strIngredient1'].value; 
    this.newMeal.strIngredient2 = this.newMealForm.controls['strIngredient2'].value; 
    this.newMeal.strIngredient3 = this.newMealForm.controls['strIngredient3'].value;
    this.newMeal.strIngredient4 = this.newMealForm.controls['strIngredient4'].value; 
    this.newMeal.strIngredient5 = this.newMealForm.controls['strIngredient5'].value; 
    this.newMeal.strIngredient6 = this.newMealForm.controls['strIngredient6'].value; 
    this.newMeal.strIngredient7 = this.newMealForm.controls['strIngredient7'].value; 
    this.newMeal.strIngredient8 = this.newMealForm.controls['strIngredient8'].value; 
    this.newMeal.strIngredient9 = this.newMealForm.controls['strIngredient9'].value; 
    this.newMeal.strIngredient10 = this.newMealForm.controls['strIngredient10'].value; 
    this.newMeal.strIngredient11 = this.newMealForm.controls['strIngredient11'].value; 
    this.newMeal.strIngredient12 = this.newMealForm.controls['strIngredient12'].value; 
    this.newMeal.strIngredient13 = this.newMealForm.controls['strIngredient13'].value; 
    this.newMeal.strIngredient14 = this.newMealForm.controls['strIngredient14'].value; 
    this.newMeal.strIngredient15 = this.newMealForm.controls['strIngredient15'].value;
    this.newMeal.strIngredient16 = this.newMealForm.controls['strIngredient16'].value;
    this.newMeal.strIngredient17 = this.newMealForm.controls['strIngredient17'].value;
    this.newMeal.strIngredient18 = this.newMealForm.controls['strIngredient18'].value;
    this.newMeal.strIngredient19 = this.newMealForm.controls['strIngredient19'].value;
    this.newMeal.strIngredient20 = this.newMealForm.controls['strIngredient20'].value; 

    this.newMeal.strMeasure1 = this.newMealForm.controls['strMeasure1'].value;
    this.newMeal.strMeasure2 = this.newMealForm.controls['strMeasure2'].value;
    this.newMeal.strMeasure3 = this.newMealForm.controls['strMeasure3'].value;
    this.newMeal.strMeasure4 = this.newMealForm.controls['strMeasure4'].value;
    this.newMeal.strMeasure5 = this.newMealForm.controls['strMeasure5'].value;
    this.newMeal.strMeasure6 = this.newMealForm.controls['strMeasure6'].value;
    this.newMeal.strMeasure7 = this.newMealForm.controls['strMeasure7'].value;
    this.newMeal.strMeasure8 = this.newMealForm.controls['strMeasure8'].value;
    this.newMeal.strMeasure9 = this.newMealForm.controls['strMeasure9'].value;
    this.newMeal.strMeasure10 = this.newMealForm.controls['strMeasure10'].value;
    this.newMeal.strMeasure11 = this.newMealForm.controls['strMeasure11'].value;
    this.newMeal.strMeasure12 = this.newMealForm.controls['strMeasure12'].value;
    this.newMeal.strMeasure13 = this.newMealForm.controls['strMeasure13'].value;
    this.newMeal.strMeasure14 = this.newMealForm.controls['strMeasure14'].value;
    this.newMeal.strMeasure15 = this.newMealForm.controls['strMeasure15'].value;
    this.newMeal.strMeasure16 = this.newMealForm.controls['strMeasure16'].value;
    this.newMeal.strMeasure17 = this.newMealForm.controls['strMeasure17'].value;
    this.newMeal.strMeasure18 = this.newMealForm.controls['strMeasure18'].value;
    this.newMeal.strMeasure19 = this.newMealForm.controls['strMeasure19'].value;
    this.newMeal.strMeasure20 = this.newMealForm.controls['strMeasure20'].value;  


    this.loggedUser.meals.push(this.newMeal);

    this.userService.putUser(this.loggedUser).subscribe(response => this.router.navigate(['userRecipes']), 
    error => console.log(error));
    console.log(this.newMeal);

  }

  addIngredient(event : Event){
    this.numberOfIngredients++;
    event.preventDefault();
  }
}
