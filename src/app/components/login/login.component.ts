import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user !: User;
  usersList : User[] = [];
  email : string = '';
  password: string = '';
  logInForm !: FormGroup; 
  wrongLogIn : boolean = false;

  constructor(private userService : UserService){}

  ngOnInit(): void {

    this.getAllUsers();

    this.logInForm = new FormGroup({
      'email' : new FormControl(this.email, [Validators.required]),
      'password' : new FormControl(this.password, [Validators.required])
    });
  }

  getAllUsers() : void {
    this.userService.getUsers().subscribe((data : User[]) => {
      this.usersList = data;
      console.log(this.usersList);
    });
  }

  logIn(){
    
    if(this.logInForm.invalid){
      return;
    }
    
    this.email = this.logInForm.controls['email'].value;
    this.password = this.logInForm.controls['password'].value;
    
    if(this.validateLogIn()){
      console.log("El mail existe");
      console.log(this.email);
      console.log(this.password);
    }
  }

  validateLogIn() : boolean {

    let exists : boolean = false;

    for(let i=0 ; i < this.usersList.length ; i++ ){

      if(this.email == this.usersList[i].email && this.password == this.usersList[i].password){
        exists = true;
        break;
      }
    }

    if(!exists){
      this.wrongLogIn = true;
    }

    return exists;
  }

  

}
