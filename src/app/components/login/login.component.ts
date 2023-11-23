import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user !: User;
  usersList: User[] = [];
  email: string = '';
  password: string = '';
  logInForm !: FormGroup;
  wrongLogIn: boolean = false;

  constructor(private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getAllUsers();

    this.logInForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'password': new FormControl(this.password, [Validators.required])
    });
  }

  getAllUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.usersList = data;
    });
  }

  logIn() {

    if (this.logInForm.invalid) {
      return;
    }

    this.email = this.logInForm.controls['email'].value;
    this.password = this.logInForm.controls['password'].value;

    if (this.validateLogIn()) {
      this.user = this.getUserByEmail();
      this.authenticationService.login(this.user);

      this.router.navigate(['home']);
      this.authenticationService.triggerLoginEvent();
    }
  }

  validateLogIn(): boolean {

    let exists: boolean = false;

    for (let i = 0; i < this.usersList.length; i++) {

      if (this.email == this.usersList[i].email && this.password == this.usersList[i].password && this.usersList[i].active) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      this.wrongLogIn = true;
    }

    return exists;
  }

  getUserByEmail(): User {

    for (let i = 0; i < this.usersList.length; i++) {

      if (this.email == this.usersList[i].email) {
        return this.usersList[i];
      }
    }

    return new User;

  }



}
