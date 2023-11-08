import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { Meal } from '../models/meal';
import { MealServiceService } from './meal-service.service';

@Injectable({
  providedIn: 'root'
})
export class MealFilterService {

  private filteredMeals: BehaviorSubject<Meal[]> = new BehaviorSubject<Meal[]>([]);
  filteredMeals$: Observable<Meal[]> = this.filteredMeals.asObservable();

  constructor(private mealService: MealServiceService) { }

  getMealFilter() {
    return this.filteredMeals.getValue();
  }

  setMealFilter(meals: Meal[]) {
    this.filteredMeals.next(meals);
  }

  filterMeals(name: string, categorie: string, country: string) {

    if (name) {
      this.mealService.getMealByName(name).subscribe((response: Meal[]) => {
          this.filterComplete(response, categorie, country);
      })
    }else if(categorie && country){
      this.filterMealsByCategorieAndCountry(categorie, country);
    }else if(categorie){
      this.mealService.getMealByCategorieOnly(categorie).subscribe((response: Meal[]) => {
        this.filteredMeals.next(response);
      });
    }else if(country){
      this.mealService.getMealByCountry(country).subscribe((response : Meal[])=>{
        this.filteredMeals.next(response);
      })
    }
  }

  filterComplete(meals: Meal[], categorie: string, country: string) {
    if(meals){
      if (categorie) {
        meals = this.filterMealsByCategorie(meals, categorie);
      }
      if(country && meals){
        meals = this.filterMealsByCountry(meals, country);
      }
      
    }
    this.filteredMeals.next(meals);
  }

  //funcion que sirve para filtrar por categorias un arreglo de meals completo ya filtrado por name
  filterMealsByCategorie(mealsFilter: Meal[], categorie: string): Meal[] {
    let rta = mealsFilter.filter(meals => {
      return meals.strCategory == categorie;
    })
    return rta;
  }

  //funcion que sirve para filtrar por pais un arreglo de meals completo ya filtrado por nombre y categoria
  filterMealsByCountry(mealsFilter: Meal[], country: string): Meal[] {
    let rta = mealsFilter.filter(meals => {
      return meals.strArea == country;
    })
    return rta;
  }

  //funcion que genera 2 request a la api, luego compara sus id y si estos concuerdan lo almacena en el
  //observable
   filterMealsByCategorieAndCountry(categorie: string, country: string) {
    let mealsCategorie: Meal[] = [];
    let mealsCountry: Meal[] = [];
  
    const categorieObservable = this.mealService.getMealByCategorieOnly(categorie);
    const countryObservable = this.mealService.getMealByCountry(country);
  
    forkJoin([categorieObservable, countryObservable]).subscribe(([responseCategorie, responseCountry]) => {
      mealsCategorie = responseCategorie;
      mealsCountry = responseCountry;
      
      this.filteredMeals.next(this.arrayFilter(mealsCategorie, mealsCountry));
    });
  }

  arrayFilter(arrayCategories : Meal[], arrayCountry : Meal[]) : Meal[]{
    let arrayFiltered : Meal[] = [];
    arrayCategories.forEach(categorie =>{
      arrayCountry.forEach(country =>{
        if(categorie.idMeal == country.idMeal){
          arrayFiltered.push(categorie);
    
        }
      });

    });
    return arrayFiltered;
  }





}
