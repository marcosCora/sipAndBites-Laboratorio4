import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { MealFilterService } from 'src/app/services/meal-filter.service';
import { MealServiceService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-form-filter-meal',
  templateUrl: './form-filter-meal.component.html',
  styleUrls: ['./form-filter-meal.component.css']
})
export class FormFilterMealComponent implements OnInit {

  filterForm!: FormGroup;

  //contenido del formulario reactivo
  nameMeal = '';
  categorieMeal = '';
  countryMeal = '';

  listCategories: Meal[] = [];
  listMealFilterer: Meal[] = [];
  mealFilter: Meal[] = [];


  constructor(private serviceMeal: MealServiceService, private filterService: MealFilterService) { }

  ngOnInit(): void {
    this.showCategories();
    this.filterForm = new FormGroup({
      'name': new FormControl(this.nameMeal),
      //'categories' : new FormControl(this.categorieMeal, Validators.required),
      'categories': new FormControl(this.categorieMeal),
      //'Ingredient' : new FormControl(this.ingredientMeal, Validators.required)
      'country': new FormControl(this.countryMeal)
    });


  }

  showCategories() {
    this.serviceMeal.getMealByCategories().subscribe((data: Meal[]) => {
      this.listCategories = data;
    })
  }

  selectCategorie(categorieSelect: string) {
    this.categorieMeal = categorieSelect;
    this.filterForm.patchValue({ categories: categorieSelect });
  }
  selectCountry(countrySelect: string) {
    this.countryMeal = countrySelect;
    this.filterForm.patchValue({ country: countrySelect });

  }

  searchMeals() {
    if (!this.filterForm.invalid) {
      let name = this.filterForm.controls['name'].value;
      let categorie = this.filterForm.controls['categories'].value;
      let country = this.filterForm.controls['country'].value;
      this.filterService.filterMeals(name, categorie, country);
    }
  }




}
