import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
    
  user : User = new User();
  userForm !: FormGroup;

  constructor(private userService : UserService,
              private router : Router){}
  
  ngOnInit() : void {
    this.userForm = new FormGroup({
      //'id' : new FormControl(this.user.id),
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
    //this.user.id = 0;
    this.user.firstName = this.userForm.controls['firstName'].value;
    this.user.lastName = this.userForm.controls['lastName'].value;
    this.user.email = this.userForm.controls['email'].value;
    this.user.password = this.userForm.controls['password'].value;
    this.user.dateOfBirth = this.userForm.controls['dateOfBirth'].value; 

    this.userService.postUser(this.user).subscribe(response => this.router.navigate(['home']), 
    error => console.log(error));
    console.log(this.user);

  }

  get firstName(){
    return this.userForm.get('firstName');
  }

  //get lastName(){
  //  return this.userForm.get('lastName');
  //}
}
