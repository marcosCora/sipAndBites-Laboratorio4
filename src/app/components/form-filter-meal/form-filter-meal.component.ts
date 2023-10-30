import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      'name' : new FormControl(this.nameMeal, Validators.required),
      'categories' : new FormControl(this.categorieMeal, Validators.required),
      'Ingredient' : new FormControl(this.ingredientMeal, Validators.required)
    });
    
  }

}
