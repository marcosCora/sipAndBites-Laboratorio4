import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CustomValidator } from '../custom-validator';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
    
  user : User = new User();
  userForm !: FormGroup;
  usersList : User[] = []
  registeredEmail : string[] = [];

  constructor(private userService : UserService,
              private router : Router,
              private authenticationService : AuthenticationService){}
  
  ngOnInit() : void {

    this.getAllUsers();
    
    this.userForm = new FormGroup({
      'firstName' : new FormControl(this.user.firstName, [Validators.required, CustomValidator.forbiddenNames(/admin/)]),
      'lastName' : new FormControl(this.user.lastName, [Validators.required]),
      'email' : new FormControl(this.user.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), CustomValidator.registeredEmails(this.registeredEmail)]),
      'password' : new FormControl(this.user.password, [Validators.required, Validators.minLength(8)]),
      'confirmPassword' : new FormControl(this.user.password, [Validators.required]),
      'dateOfBirth' : new FormControl(this.user.dateOfBirth, [Validators.required, CustomValidator.legalAge])
    },{
      validators : CustomValidator.matchPasswords('password', 'confirmPassword')
    });
  }

  getAllUsers() : void {
    this.userService.getUsers().subscribe((data : User[]) => {
      this.usersList = data;
      this.getRegisteredEmails();
    });
  }

  getRegisteredEmails() : void {
    for(let i=0 ; i < this.usersList.length ; i++){
        this.registeredEmail.push(this.usersList[i].email);
    }
  }

  addUser(){

    if(this.userForm.invalid){
      return;
    }
    this.user.firstName = this.userForm.controls['firstName'].value;
    this.user.lastName = this.userForm.controls['lastName'].value;
    this.user.email = this.userForm.controls['email'].value;
    this.user.password = this.userForm.controls['password'].value;
    this.user.dateOfBirth = this.userForm.controls['dateOfBirth'].value; 
    this.user.active = true;

    this.userService.postUser(this.user).subscribe(
      response => {
        this.authenticationService.login(this.user);
        this.authenticationService.triggerLoginEvent();
        Swal.fire({
          title: `Welcome ${this.user.firstName}!`,
          text: "Thank you for joining us!",
          icon: "success",
          confirmButtonColor: '#892889'
        });
        this.router.navigate(['home']);
        }, 
      error => console.log(error));

  }

  get firstName(){
    return this.userForm.get('firstName');
  }


}
