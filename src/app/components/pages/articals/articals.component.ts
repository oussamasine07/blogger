import { Component } from '@angular/core';
import { ArticalCardComponent } from '../../partials/artical-card/artical-card.component';

@Component({
  selector: 'app-articals',
  imports: [
    ArticalCardComponent
  ],
  templateUrl: './articals.component.html',
  styleUrl: './articals.component.css'
})
export class ArticalsComponent {

}
