import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  dataComment: string = '';
  commentComplete: Comment = {idProduct: 0, idUser: 0, comment: '', id: 0}; 
  @Input() idProduct !: number;
  inputValue = '';

  formComment !: FormGroup;

  user !: User;

  constructor(private commentService: CommentService, private userauthentication: AuthenticationService) { }
  ngOnInit(): void {
    this.userauthentication.authStatusChangesUser.subscribe(response => {
      this.user = response;
    })
    this.formComment = new FormGroup({
      'comment': new FormControl('', [Validators.required])
    })
  }

  sendComment() {

    if (!this.formComment.invalid) {
      this.dataComment = this.formComment.value.comment;
      this.commentComplete.idProduct = this.idProduct;
      this.commentComplete.idUser = this.user.id;
      this.commentComplete.comment = this.dataComment;
      this.commentService.postComment(this.commentComplete).subscribe(
        (response) => {
        console.log('response: ',response);
        },
        (error)=>{
          console.log('Error:', error); 
        });
        
    }
    this.inputValue = ''
  }
}
