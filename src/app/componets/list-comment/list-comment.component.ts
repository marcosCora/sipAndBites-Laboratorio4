import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/models/comment';


@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

  @Input() idProduct: number = 0;
  usersName: string[] = [];
  listComment: Comment[] = [];

  constructor(private commentService: CommentService, private usersService: UserService) { }

  ngOnInit(): void {
    this.showComments();
  }




  showComments() {
    this.commentService.getComments().subscribe(response => {
      response.forEach(data => {
        if (data.idProduct == this.idProduct) {
          this.listComment.push(data);
          
        }
      })

    });
  }



}





