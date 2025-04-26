import { Component, inject, input, Input, OnInit } from '@angular/core';
import { ArticalsService } from '../../../services/articals/articals.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommentComponent } from '../../partials/comment/comment.component';

@Component({
  selector: 'app-single-artical',
  imports: [ RouterLink, CommentComponent ],
  templateUrl: './single-artical.component.html',
  styleUrl: './single-artical.component.css'
})
export class SingleArticalComponent implements OnInit {
  @Input() artical!: {
    id: string;
    title: string, 
    articalBody: string, 
    image: string
  }

  articalService = inject(ArticalsService)

  @Input() articalId!: string;
  route = inject(ActivatedRoute)
  
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
  }

}
