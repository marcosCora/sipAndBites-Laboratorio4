import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editUser : User = new User();
  editUserForm !: FormGroup;

  constructor(private userService : UserService,
              private router : Router){}
  
  ngOnInit() : void {
    
    this.userService.getUserById(7).subscribe(((data : User) => {
      this.editUser = data;
    }));
    
    this.editUserForm = new FormGroup({

      'firstName' : new FormControl(this.editUser.firstName, [Validators.required]),
      'lastName' : new FormControl(this.editUser.lastName, [Validators.required]),
      'email' : new FormControl(this.editUser.email, [Validators.required]),
      'password' : new FormControl(this.editUser.password, [Validators.required]),
      'dateOfBirth' : new FormControl(this.editUser.dateOfBirth, [Validators.required])
    });
  }

  updateUser(){

    if(this.editUserForm.invalid){
      return;
    }
    
    this.editUser.firstName = this.editUserForm.controls['firstName'].value;
    this.editUser.lastName = this.editUserForm.controls['lastName'].value;
    this.editUser.email = this.editUserForm.controls['email'].value;
    this.editUser.password = this.editUserForm.controls['password'].value;
    this.editUser.dateOfBirth = this.editUserForm.controls['dateOfBirth'].value; 

    this.userService.putUser(this.editUser).subscribe(response => this.router.navigate(['home']), 
    error => console.log(error));
    console.log(this.editUser);

  }

  


}
