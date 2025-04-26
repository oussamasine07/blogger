import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-artical',
  imports: [ FormsModule ],
  templateUrl: './create-artical.component.html',
  styleUrl: './create-artical.component.css'
})
export class CreateArticalComponent {

  articalObj = {
    title: "", 
    articalBody: "", 
    image: "", 
    category: ""
  }

  onCreateArticalSubmit (form: FormsModule) {

    console.log(this.articalObj)

    this.articalObj = {
      title: "", 
      articalBody: "", 
      image: "", 
      category: ""
    }
  }

}
