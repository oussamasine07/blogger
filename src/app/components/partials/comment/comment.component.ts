import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ArticalsService } from '../../../services/articals/articals.service';

@Component({
  selector: 'app-comment',
  imports: [ NgIf ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment!: {
    comment: string,
    userId: string,
    username: string,
    articalId: string,
    id: string
  }

  @Input() currentUser!: { username: string, email: string, id: string } | null | undefined;

  articalService = inject(ArticalsService);

  onDeletCommentClick (commentId: string) {
    if (this.currentUser) {
      if (this.comment.userId === this.currentUser?.id) {
        this.articalService.deleteComment(commentId);
      } else {
        console.log("unauthorized action")
      }
    } else {
      console.log("loggin first")
    }
    
  }
}
