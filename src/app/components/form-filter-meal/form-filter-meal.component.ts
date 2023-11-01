import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { MealServiceService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-form-filter-meal',
  templateUrl: './form-filter-meal.component.html',
  styleUrls: ['./form-filter-meal.component.css']
})
export class FormFilterMealComponent implements OnInit{
  
  filterForm!: FormGroup;
  nameMeal = '';
  categorieMeal = '';
  ingredientMeal = '';
  countryMeal = '';
  listCategories : Meal[] = [];
  listMealFilterer : Meal[] = [];
  mealFilter : Meal[] = [];

  //buttonTitle = 'Select Categorie';

  constructor(private serviceMeal : MealServiceService){}

   ngOnInit(): void {
    this.showCategories();
    this.filterForm = new FormGroup({
      'name' : new FormControl(this.nameMeal, Validators.required),
      //'categories' : new FormControl(this.categorieMeal, Validators.required),
      'categories' : new FormControl(this.categorieMeal),
      //'Ingredient' : new FormControl(this.ingredientMeal, Validators.required)
      'Ingredient' : new FormControl(this.ingredientMeal),
      'country' : new FormControl(this.countryMeal)
    });
    
  } 

   showCategories(){
    this.serviceMeal.getMealByCategories().subscribe((data : Meal[])=>{
      this.listCategories = data;
    })
  } 

  selectCategorie(categorieSelect : string){
    this.categorieMeal = categorieSelect;
    this.filterForm.patchValue({categories : categorieSelect});
  }
   selectCountry(countrySelect : string){
    this.countryMeal = countrySelect;
    this.filterForm.patchValue({country : countrySelect});

  } 

 /*  async searchMeals(){
    
    if (!this.filterForm.invalid) {
      let name = this.filterForm.controls['name'].value;
      let categorie = this.filterForm.controls['categories'].value;
      let Ingredient = this.filterForm.controls['Ingredient'].value;
      let country = this.filterForm.controls['country'].value;
      console.log(country);
      
      let filter  = await this.showMealsByNameFilter(name);
      console.log(filter);
      
      

    }
  }

   async showMealsByNameFilter(name : string){
     this.serviceMeal.getMealByName(name).subscribe((data : Meal[])=>{
      //console.log(data);
      //this.mealFilter =  data;
      return data;
    });
  }
} */

searchMeals() {
  if (!this.filterForm.invalid) {
    let name = this.filterForm.controls['name'].value;
    let categorie = this.filterForm.controls['categories'].value;
    let Ingredient = this.filterForm.controls['Ingredient'].value;
    let country = this.filterForm.controls['country'].value;

    this.showMealsByNameFilter(name).subscribe(data => {
      //console.log(data);
      this.prueba(data);

      // Aquí puedes realizar el procesamiento de los datos obtenidos
    });
  }
}

showMealsByNameFilter(name: string): Observable<Meal[]> {
  return this.serviceMeal.getMealByName(name);
}

prueba(meals : Meal[]){
  console.log(meals);
  
}

}
