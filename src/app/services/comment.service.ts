import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Comment } from '../models/comment';
import { UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }

  private url : string = 'http://localhost:4000/comments'
  private commentResponse$ = new Subject<Comment>();

  getComments() : Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url);
  }
  
  postComment(comment : Comment) : Observable<Comment[]>{
    return this.http.post<Comment[]>(this.url, comment);
  }

  putComment(comment : Comment) : Observable<Comment[]>{
    return this.http.put<Comment[]>(`${this.url}/${comment.id}`, comment);
  }

  deleteComment(id : number) : Observable<Comment[]>{
    return this.http.delete<Comment[]>(`${this.url}/${id}`);
  }

  getById(id : number) : Observable<Comment>{
    return this.http.get<Comment>(`${this.url}/${id}`);
  }

  addResponse(comment : Comment){
    this.commentResponse$.next(comment);
  }

  getResponse() : Observable<Comment>{
    return this.commentResponse$.asObservable();
  }

}
