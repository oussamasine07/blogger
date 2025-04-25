import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-artical',
  imports: [],
  templateUrl: './single-artical.component.html',
  styleUrl: './single-artical.component.css'
})
export class SingleArticalComponent implements OnInit {
  @Input() artical!: {
    title: string, 
    articalBody: string, 
    image: string
  }
  
  ngOnInit(): void {
    
  }

}
