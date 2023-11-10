import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.css']
})
export class DrinkViewComponent implements OnInit{

  drink !: Drink ;
  isLoggedIn : boolean = false;
  loggedUser : User = new User();

  constructor(private drinkService : DrinkService,
              private route : ActivatedRoute,
              private authenticationService : AuthenticationService){}

  ngOnInit(): void{
    this.route.params.subscribe(async param => {
      const idDrink = +param['id'];
      this.drinkService.getDrinkById(idDrink).subscribe((data : Drink) => {
          this.drink = data;
          console.log(this.drink);
        });
    });

    this.authenticationService.authStatusChangesIsLoggedIn.subscribe(result => {
      this.isLoggedIn = result;
    });

    this.authenticationService.authStatusChangesUser.subscribe(user => {
      this.loggedUser = user;
    });
  }

  addToFavList(idDrink : string){

  }

}
