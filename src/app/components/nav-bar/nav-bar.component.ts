import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  loggedUser !: User;
  isLoggedIn : boolean = false;
  username !: string | null;

  constructor(private authenticationService : AuthenticationService,
              private userService : UserService){
  }
  
  ngOnInit(): void {

    this.authenticationService.loginEvent$.subscribe(response =>{
      this.isLoggedIn = true;
      this.loggedUser = this.authenticationService.getCurrentUser();
    });
    
    this.loggedUser = this.authenticationService.getCurrentUser();
    if(this.loggedUser){
      this.isLoggedIn = true;      
    }
  }

  logOut() : void {
    this.authenticationService.logout();
  }
  
}
