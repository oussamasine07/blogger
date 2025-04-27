import { Component, inject, input, Input, OnInit } from '@angular/core';
import { ArticalsService } from '../../../services/articals/articals.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommentComponent } from '../../partials/comment/comment.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-single-artical',
  imports: [ RouterLink, CommentComponent, NgFor, FormsModule ],
  templateUrl: './single-artical.component.html',
  styleUrl: './single-artical.component.css'
})
export class SingleArticalComponent implements OnInit {
  @Input() artical!: {
    id: string;
    title: string, 
    articalBody: string, 
    image: string
    comments: {
      comment: string,
      userId: string,
      username: string
    }[]
  }

  @Input() comments!: {
    comment: string,
    userId: string,
    username: string,
    articalId: string
  }[]

  articalService = inject(ArticalsService)

  @Input() articalId!: string;

  route = inject(ActivatedRoute)
  authService = inject(AuthService);
  
  ngOnInit(): void {
    this.articalId = this.route.snapshot.paramMap.get("articalId") || "";
    this.articalService.getArticalById(this.articalId).subscribe({
      next: (artical) => {
        console.log(artical)
        this.artical = artical
      },
      error: (err) => {
        console.log(err.message)
      }
    })

    this.authService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.authService.currentUserSig.set({
            username: user.displayName!,
            email: user.email!,
            id: user.uid!
          })
        } else {
          this.authService.currentUserSig.set(null)
        }

        
      }
    })

    this.articalService.getComments(this.articalId).subscribe({
      next: (comments) => {
        this.comments = comments
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  }

  comment = ""
  onSubmitComment(form: FormsModule) {

    const commentObj = {
      articalId: this.articalId,
      comment: this.comment,
      userId: this.authService.currentUserSig()?.id,
      username: this.authService.currentUserSig()?.username
    }

    if (this.authService.currentUserSig()) {
      this.articalService.postComment(commentObj);
    } else {
      console.log("unauthorized action")
    }

    this.comment = ""
  }

}
