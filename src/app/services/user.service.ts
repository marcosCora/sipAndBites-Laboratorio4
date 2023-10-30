import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = '';

  constructor(private http : HttpClient, 
              private router : Router){}

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  postUser(user : User) : void {
    this.http.post<User>(this.url, user);
    this.router.navigate(['home']);
  }

  putUser(user : User) : void {
    this.http.put<User>(this.url, user);
    this.router.navigate(['home']);
  }

  deleteUser(idUser : number) : void {
    this.http.delete<User>(`${this.url}/${idUser}`);
    this.router.navigate(['home']);
  }

  getUserById(idUser : number) : Observable<User> {
    return this.http.get<User>(`${this.url}/${idUser}`);
  }

}
