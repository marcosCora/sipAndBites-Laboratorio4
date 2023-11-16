import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.css']
})
export class DrinkViewComponent implements OnInit{

  drink !: Drink ;
  userLog : boolean = false;
  idDrink ! : number;

  constructor(private drinkService : DrinkService,
             private route : ActivatedRoute,
             private authenTicationUser : AuthenticationService){}

  ngOnInit(): void{
    this.route.params.subscribe(async param => {
      this.idDrink = +param['id'];
      this.drinkService.getDrinkById(this.idDrink).subscribe((data : Drink) => {
          this.drink = data;
          console.log(this.drink);
          this.authenTicationUser.authStatusChangesIsLoggedIn.subscribe(response =>{
            this.userLog = response;            
          })
        });
    });
  }

  

}
