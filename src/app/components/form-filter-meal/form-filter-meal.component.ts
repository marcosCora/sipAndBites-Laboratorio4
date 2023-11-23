import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meal } from 'src/app/models/meal';
import { MealFilterService } from 'src/app/services/meal-filter.service';
import { MealService } from 'src/app/services/meal.service';



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
  listCountry : string[] = [];


  constructor(private serviceMeal: MealService, private filterService: MealFilterService) { }

  ngOnInit(): void {
    this.showCategories();
    this.showCountry();
    this.filterForm = new FormGroup({
      'name': new FormControl(this.nameMeal),
      'categories': new FormControl(this.categorieMeal),
      'country': new FormControl(this.countryMeal)
    });


  }

  showbyName(){
    this.serviceMeal.getMealByName('').subscribe(response =>{
      this.filterService.setMealFilter(response);
    })
  }

  removeFilter() : void {
    this.showbyName();
    this.filterForm.controls['name'].reset('');
    this.filterForm.controls['categories'].reset('');
    this.filterForm.controls['country'].reset('');
  }

  showCountry(){
    this.serviceMeal.getMealByName(this.nameMeal).subscribe((data : Meal[])=>{
      let arrayAux : string[] = [];
      data.forEach(d =>{
        arrayAux.push(d.strArea);
      });
      let uniqueValues = new Set(arrayAux);

      this.listCountry = Array.from(uniqueValues);
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
