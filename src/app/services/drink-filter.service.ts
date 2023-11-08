import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Drink } from '../models/drink';
import { DrinkService } from './drink.service';

@Injectable({
  providedIn: 'root'
})
export class DrinkFilterService {

  private filteredDrink : BehaviorSubject<Drink[]> = new BehaviorSubject<Drink[]>([]);
  arrayDrink$ : Observable<Drink[]> = this.filteredDrink.asObservable();

  constructor(private drinkService : DrinkService) { }

  getDrinkFilter(){
    return this.filteredDrink.getValue();
  }

  setDrinkFilter(drink : Drink[]){
    this.filteredDrink.next(drink);
  }

  filterDrinks(name : string, category : string, alcohol : boolean){
    if(name){
      this.drinkService.getDrinksByName(name).subscribe(response =>{
       if(response){
        this.filterComplete(response, category, alcohol);
      }else{
        this.filteredDrink.next(response);
      }
      }) 
    }
    else if(category){
      this.drinkService.getDrinksByCategoryOnly(category).subscribe(response =>{
      this.filteredDrink.next(response);
      });
    }
  }

  filterComplete(drinks : Drink[], category : string, alcohol : boolean){

    if(category){
       drinks = drinks.filter(drink=>{
        return drink.strCategory == category;
      })
    }
    if(alcohol){
      drinks = drinks.filter(drink=>{
        return drink.strAlcoholic == "Alcoholic";
      })
    }
    this.filteredDrink.next(drinks);
  }

}
