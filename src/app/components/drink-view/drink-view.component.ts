import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DrinkService } from 'src/app/services/drink.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.css']
})
export class DrinkViewComponent implements OnInit{
  drink !: Drink ;
  isLoggedIn : boolean = false;
  loggedUser : User = new User();
  isFavourite : boolean = false;
  userLog : boolean = false;
  idDrink !: number;

  constructor(private drinkService : DrinkService,
              private route : ActivatedRoute,
              private authenticationService : AuthenticationService,
              private userService : UserService){}

  ngOnInit(): void{
    this.route.params.subscribe(async param => {
      this.idDrink = +param['id'];
      this.drinkService.getDrinkById(this.idDrink).subscribe((data : Drink) => {
          this.drink = data;
          this.isFavourite = this.isDrinkInFavList();
          console.log(this.drink);
          this.authenticationService.authStatusChangesIsLoggedIn.subscribe(response =>{
            this.userLog = response;            
          })
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
    
    this.loggedUser.drinksFavList.push(Number(idDrink));
    this.isFavourite = true;
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para guardar'),
      error => console.log(error));;
    //alert(`${this.drink.strDrink} se agrego a tu lista de favoritos!`);
  }

  isDrinkInFavList() : boolean {
      let exists = false;

      if(this.loggedUser.drinksFavList){
        exists = !!this.loggedUser.drinksFavList.find(id => id === Number(this.drink.idDrink));
      }

      return exists;
  }

  removeFromFavList(idDrink : string) : void {
    
    this.loggedUser.drinksFavList = this.loggedUser.drinksFavList.filter(id => id !== Number(idDrink));
    this.isFavourite = false;
    this.userService.putUser(this.loggedUser).subscribe(
      response => console.log('entra al put para eliminar'),
      error => console.log(error));
    
  }

  

}
