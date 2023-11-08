import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = 'http://localhost:4000/users';

  constructor(private http : HttpClient, 
              private router : Router){}

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  postUser(user : User) : Observable<User> {
    return this.http.post<User>(this.url, user); 
    
  }

  putUser(user : User) : Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
    
  }

  deleteUser(idUser : number) : Observable<User> {
    return this.http.delete<User>(`${this.url}/${idUser}`);
    
  }

  getUserById(idUser : number) : Observable<User> {
    return this.http.get<User>(`${this.url}/${idUser}`);
  }


}
