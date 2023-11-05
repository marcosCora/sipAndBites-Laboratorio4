import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  authStatusChangesIsLoggedIn = this.isLoggedInSubject.asObservable();
  
  private loggedUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(new User);  
  authStatusChangesUser = this.loggedUserSubject.asObservable();
  


  login(user : User) {
    
    
    console.log('llega al login del service');
    // Lógica de autenticación (puede ser una llamada a una API, por ejemplo)
    this.isLoggedInSubject.next(true);
    this.loggedUserSubject.next(user);
  }

  logout() {
    this.isLoggedInSubject.next(false);
    this.loggedUserSubject.next(new User);
  }

  

 
}

