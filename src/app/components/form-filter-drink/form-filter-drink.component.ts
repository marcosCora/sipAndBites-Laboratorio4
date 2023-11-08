import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Drink } from 'src/app/models/drink';
import { DrinkFilterService } from 'src/app/services/drink-filter.service';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-form-filter-drink',
  templateUrl: './form-filter-drink.component.html',
  styleUrls: ['./form-filter-drink.component.css']
})
export class FormFilterDrinkComponent implements OnInit {
  
  filterForm! : FormGroup;
  listCategories : Drink[] = [];


  nameDrink = '';
  categories = '';
  alcoholic = false;//si es false es bebida sin alcohol

  constructor(private drinkFilterService : DrinkFilterService, private drinkService : DrinkService){}


  ngOnInit(): void {
    
    this.showByCategories();

    this.filterForm = new FormGroup({
      'name' : new FormControl(this.nameDrink),
      'categories' : new FormControl(this.categories),
      'alcoholic' : new FormControl(this.alcoholic)
    })

  }

  showByCategories(){
    this.drinkService.getDrinkByCategories().subscribe(response =>{
      this.listCategories = response;
    })
  }


  searchDrink(){

    if(!this.filterForm.invalid){
      let name = this.filterForm.controls['name'].value;
      let categorie = this.filterForm.controls['categories'].value;
      let alcohol = this.filterForm.controls['alcoholic'].value;

      this.drinkFilterService.filterDrinks(name, categorie, alcohol);
    }
  }


}
