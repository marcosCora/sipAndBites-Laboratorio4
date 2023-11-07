import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-filter-drink',
  templateUrl: './form-filter-drink.component.html',
  styleUrls: ['./form-filter-drink.component.css']
})
export class FormFilterDrinkComponent implements OnInit {
  
  filterForm! : FormGroup;

  nameDrink = '';
  ingredientDrink = '';
  categories = '';
  alcoholic = false;//si es false es bebida sin alcohol

  ngOnInit(): void {
    
    this.filterForm = new FormGroup({
      'name' : new FormControl(this.nameDrink),
      'ingredient' : new FormControl(this.ingredientDrink),
      'categories' : new FormControl(this.categories),
      'alcoholic' : new FormControl(this.alcoholic)
    })

  }



  searchDrink(){

    if(!this.filterForm.invalid){
      let name = this.filterForm.controls['name'].value;
      let ingredient = this.filterForm.controls['ingredient'].value;
      let categorie = this.filterForm.controls['categories'].value;
      let alcohol = this.filterForm.controls['alcoholic'].value;

      console.log(name, ingredient, categorie, alcohol);
      



    }

  }


}
