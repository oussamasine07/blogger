import { Component, inject, input, Input, OnInit } from '@angular/core';
import { ArticalsService } from '../../../services/articals/articals.service';

@Component({
  selector: 'app-single-artical',
  imports: [],
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

  articalId = input.required<string>();
  
  ngOnInit(): void {
    this.articalService.getArticalById(this.articalId()).subscribe({
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
