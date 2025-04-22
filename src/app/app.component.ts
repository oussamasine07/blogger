import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { ArticalsComponent } from './components/pages/articals/articals.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent, FooterComponent, HeaderComponent,
    ArticalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
}
