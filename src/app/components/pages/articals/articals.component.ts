import { Component, inject, OnInit, signal } from '@angular/core';
import { ArticalCardComponent } from '../../partials/artical-card/artical-card.component';
import { ArticalsService } from '../../../services/articals/articals.service';
import { ArticalInterface } from '../../../interfaces/artical-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-articals',
  imports: [
    NgFor,
    ArticalCardComponent
  ],
  templateUrl: './articals.component.html',
  styleUrl: './articals.component.css'
})
export class ArticalsComponent implements OnInit {
  articalService = inject(ArticalsService)
  articals: ArticalInterface[] = []

  ngOnInit(): void {
    this.articalService.getArtical().subscribe({
      next: (articals) => {
        this.articals = articals
      }
    });
  }
}
