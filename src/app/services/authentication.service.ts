import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private localStorageKey = 'userCurrent';  
  private loginSubject = new Subject<void>();
  loginEvent$ = this.loginSubject.asObservable();

  
  triggerLoginEvent() {
    this.loginSubject.next();
  }

  login(user : User) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.localStorageKey);
  }

  getCurrentUser() : User{
    let user = localStorage.getItem(this.localStorageKey);
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

