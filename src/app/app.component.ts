import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { ArticalsComponent } from './components/pages/articals/articals.component';
import { AuthService } from './services/auth/auth.service';

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
export class AppComponent implements OnInit {
  title = 'blog-app';

  authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.authService.currentUserSig.set({
            username: user.displayName!,
            email: user.email!,
            id: user.uid!
          })
        } else {
          this.authService.currentUserSig.set(null)
        }

        console.log(this.authService.currentUserSig())
      }
    })
  }

}
