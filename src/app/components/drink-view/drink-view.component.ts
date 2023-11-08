import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.css']
})
export class DrinkViewComponent implements OnInit{

  drink !: Drink ;

  constructor(private drinkService : DrinkService, private route : ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(async param => {
      const idDrink = +param['id'];
      this.drinkService.getDrinkById(idDrink).subscribe((data : Drink) => {
          this.drink = data;
          console.log(this.drink);
        });
    });
  }

}
