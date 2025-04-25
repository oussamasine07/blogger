import { Component, inject, OnInit, signal } from '@angular/core';
import { ArticalCardComponent } from '../../partials/artical-card/artical-card.component';
import { ArticalsService } from '../../../services/articals/articals.service';
import { ArticalInterface } from '../../../interfaces/artical-interface';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articals',
  imports: [
    NgFor,
    ArticalCardComponent,
    FormsModule
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

  filterObj = {
    category: "",
    keyword: ""
  }

  onFilterSubmit (form: FormsModule) {
    console.log(this.filterObj)
    
    this.articalService.filterByCategoryOrKeyword(this.filterObj.category, this.filterObj.keyword).subscribe({
      next: (articals) => {
        console.log(articals)
        this.articals = articals
      }
    });

    this.filterObj = {
      category: "",
      keyword: ""
    }
  }
}
