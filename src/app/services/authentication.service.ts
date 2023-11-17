import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private localStorageKey = 'userCurrent';

 /*  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  authStatusChangesIsLoggedIn = this.isLoggedInSubject.asObservable();
  
  private loggedUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(new User);  
  authStatusChangesUser = this.loggedUserSubject.asObservable(); */
  

  login(user : User) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    console.log(user);
  }

  logout() {
    localStorage.removeItem(this.localStorageKey);
  }

  getCurrentUser() : User{
    let user = localStorage.getItem(this.localStorageKey);
    console.log(user);
    
    return user ? JSON.parse(user) : null;
  }



/*   login(user : User) {

    // Lógica de autenticación (puede ser una llamada a una API, por ejemplo)
    this.isLoggedInSubject.next(true);
    this.loggedUserSubject.next(user);
  }

  logout() {
    this.isLoggedInSubject.next(false);
    this.loggedUserSubject.next(new User);
  } */

  

 
}

