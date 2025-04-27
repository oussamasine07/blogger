import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

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
    username: string
  }

  @Input() currentUser!: { username: string, email: string, id: string } | null | undefined;
}
