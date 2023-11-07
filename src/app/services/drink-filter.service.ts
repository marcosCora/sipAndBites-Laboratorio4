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

  




}
