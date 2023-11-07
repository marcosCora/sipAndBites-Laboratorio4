import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';
import { MealServiceService } from './meal-service.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealSharingServiceService   {



  private mealListSubject = new BehaviorSubject<Meal[]>([]);
  private mealList$ = this.mealListSubject.asObservable();

  constructor(private mealService : MealServiceService) { }
  

  getListMeal() : Observable<Meal[]>{
    return this.mealList$;
  }

  setListMeal(meals : Meal[]) : void{
    this.mealListSubject.next(meals);
  }

  showMealsByName(name : string){
    this.mealService.getMealByName(name).subscribe((data : Meal[])=>{
      this.mealListSubject.next(data);
    });
   }

   showMealById(){
    this.mealService.getMealById(52977).subscribe((data : Meal[])=>{
      this.mealListSubject.next(data);
    });
   }

   showMealByCategories(){
    this.mealService.getMealByCategories().subscribe((data : Meal[])=>{
      this.mealListSubject.next(data);
    });
   }

   showMealByFirstLetter(){
    this.mealService.getMealByFirstLetter('l').subscribe((data : Meal[])=>{
      this.mealListSubject.next(data);
    });
   }

   showMealByIngredient(){
    this.mealService.getMealByIngredient('onion').subscribe((data : Meal[])=>{
      this.mealListSubject.next(data);
    })
   }

}
