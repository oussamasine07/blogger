import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../../../pips/truncate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artical-card',
  imports: [ TruncatePipe, RouterLink ],
  templateUrl: './artical-card.component.html',
  styleUrl: './artical-card.component.css'
})
export class ArticalCardComponent {
  @Input() artical!: {
    id: string,
    title: string, 
    articalBody: string, 
    image: string
  } 
}
