import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
    
  user : User = new User();
  userForm !: FormGroup;

  constructor(){}
  
  ngOnInit() : void {
    this.userForm = new FormGroup({
      'idUser' : new FormControl(this.user.idUser),
      'firstName' : new FormControl(this.user.firstName, [Validators.required]),
      'lastName' : new FormControl(this.user.lastName, [Validators.required]),
      'email' : new FormControl(this.user.email, [Validators.required]),
      'password' : new FormControl(this.user.password, [Validators.required]),
      'dateOfBirth' : new FormControl(this.user.dateOfBirth, [Validators.required])
    });
  }

  addUser(){

    if(this.userForm.invalid){
      return;
    }

  }

  get firstName(){
    return this.userForm.get('firstName');
  }

  //get lastName(){
  //  return this.userForm.get('lastName');
  //}
}
