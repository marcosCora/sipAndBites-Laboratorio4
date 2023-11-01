import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  listCategories : Meal[] = [];
  listMealFilterer : Meal[] = [];
  //buttonTitle = 'Select Categorie';

  constructor(private serviceMeal : MealServiceService){}

   ngOnInit(): void {
    this.showCategories();
    this.filterForm = new FormGroup({
      'name' : new FormControl(this.nameMeal, Validators.required),
      //'categories' : new FormControl(this.categorieMeal, Validators.required),
      'categories' : new FormControl(this.categorieMeal),
      //'Ingredient' : new FormControl(this.ingredientMeal, Validators.required)
      'Ingredient' : new FormControl(this.ingredientMeal)
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

  searchMeals(){
    
    if (!this.filterForm.invalid) {
      let name = this.filterForm.controls['name'].value;
      let categorie = this.filterForm.controls['categories'].value;
      let Ingredient = this.filterForm.controls['Ingredient'].value;
      
      let mealsFilter = this.showMealsByNameFilter(name);
      

    }
  }

  showMealsByNameFilter(name : string) : any{
    this.serviceMeal.getMealByName(name).subscribe((data : Meal[])=>{
      this.listMealFilterer = data;
    });
  }
}
