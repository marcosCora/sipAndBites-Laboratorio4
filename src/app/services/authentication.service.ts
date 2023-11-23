import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';

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
}

