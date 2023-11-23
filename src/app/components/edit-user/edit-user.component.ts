import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { CustomValidator } from '../custom-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editUser : User = new User();
  editUserForm !: FormGroup;
  edit : boolean = false;

  constructor(private userService : UserService,
              private router : Router,
              private authenticationService : AuthenticationService
              ){}
  
  ngOnInit() : void {
    
  this.editUser = this.authenticationService.getCurrentUser();
  
  this.editUserForm = new FormGroup({

    'firstName' : new FormControl(this.editUser.firstName, [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]),
    'lastName' : new FormControl(this.editUser.lastName, [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]),
    'email' : new FormControl(this.editUser.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    'password' : new FormControl(this.editUser.password, [Validators.required, Validators.minLength(8)]),
    'dateOfBirth' : new FormControl(this.editUser.dateOfBirth, [Validators.required, CustomValidator.legalAge])
  });
  }

  updateUser(){

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: '#892889',
      denyButtonText: `Don't save`
    }).then((result) => {
      
      if (result.isConfirmed) {

        this.saveUpdatedUser();

      } else if (result.isDenied) {
        
        this.dontSaveUpdatedUser();
      
      }
    });

    
  }

  saveUpdatedUser() : void {

    if(!this.editUserForm.invalid){   
      
      this.editUser.firstName = this.editUserForm.controls['firstName'].value;
      this.editUser.lastName = this.editUserForm.controls['lastName'].value;
      this.editUser.email = this.editUserForm.controls['email'].value;
      this.editUser.password = this.editUserForm.controls['password'].value;
      this.editUser.dateOfBirth = this.editUserForm.controls['dateOfBirth'].value;       
      this.authenticationService.login(this.editUser);
      
      this.userService.putUser(this.editUser).subscribe(
      response => {
                  Swal.fire(
                    {
                      title: `Saved!`,
                      text: "",
                      icon: "success",
                      showConfirmButton: false
                    });
                    setTimeout(() => {window.location.reload()}, 1000);
                  }, 
      error => console.log(error));

    }
  }

  dontSaveUpdatedUser() : void {
    Swal.fire(
      {
        title: `Changes were not saved`,
        text: "",
        icon: "info",
        showConfirmButton: false
      });
    
    setTimeout(() => {window.location.reload()}, 1000);
  }

  logOut() {
    this.editUser.active = false;
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

  signOut() : void {

      Swal.fire({
        title: 'Are you sure you want to unsubscribe?',
        text: `You won't be able to revert this!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#892889',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.signOutAction();
        }
      });

  }


  signOutAction() : void {

    Swal.fire({
      title: `We are sorry to see you go...`,
      text: "Come back any time!",
      icon: "success",
      confirmButtonColor: '#892889'
    });

    this.editUser.active = false;

    this.userService.putUser(this.editUser).subscribe(
      () => {
                console.log('entra al sign out ');
                this.authenticationService.logout();
                window.location.reload()
                
            },
      error => console.log(error)
    ); 

    this.router.navigate(['home']);

  }

}
