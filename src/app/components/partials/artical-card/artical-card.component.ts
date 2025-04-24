import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../../../pips/truncate.pipe';

@Component({
  selector: 'app-artical-card',
  imports: [ TruncatePipe ],
  templateUrl: './artical-card.component.html',
  styleUrl: './artical-card.component.css'
})
export class ArticalCardComponent {
  @Input() artical!: {title: string, articalBody: string, image: string} 
}
