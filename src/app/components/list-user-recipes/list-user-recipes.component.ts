import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user-recipes',
  templateUrl: './list-user-recipes.component.html',
  styleUrls: ['./list-user-recipes.component.css']
})
export class ListUserRecipesComponent implements OnInit {

  loggedUser : User = new User;
  showMeals : boolean = true;
  showDrinks : boolean = true;
  

  constructor(private userService : UserService,
              private authenticationService : AuthenticationService){}

  ngOnInit(): void {
    this.loggedUser = this.authenticationService.getCurrentUser();

  /*   this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
      this.loggedUser = user;
    }); */
  }

  showMealList(){
    if(this.showMeals){
      this.showMeals = false;
    }else{
      this.showMeals = true;
    }
  }

  showDrinkList(){
    if(this.showDrinks){
      this.showDrinks = false;
    }else{
      this.showDrinks = true;
    }
  }


}
