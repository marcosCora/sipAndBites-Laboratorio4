import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  
  constructor(private foodService : FoodServiceService){}
  
  ngOnInit(): void {
    this.foodService.getFoodByName('a')//de prueba
      .then(response =>{

      })
      .catch(response =>{
        //mensaje
      })
  }
   

  }




