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
    
      this.authenticationService.authStatusChangesUser.subscribe((user : User) => {
        this.loggedUser = user;
      });

      this.authenticationService.authStatusChangesIsLoggedIn.subscribe((isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
        console.log(this.loggedUser.firstName); 
      });
  }

  logOut() : void {
    this.authenticationService.logout();
  }

  signOut() : void {
    this.loggedUser.active = false;
    this.userService.putUser(this.loggedUser).subscribe(
      response => this.authenticationService.logout(),
      error => console.log(error));
    //this.authenticationService.logout();
  }
  
}
