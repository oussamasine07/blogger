import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-artical',
  imports: [ FormsModule ],
  templateUrl: './create-artical.component.html',
  styleUrl: './create-artical.component.css'
})
export class CreateArticalComponent {

  router = inject(Router)
  authService = inject(AuthService)

  ngOnInit(): void {
    console.log(this.authService.currentUserSig())

    this.authService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.authService.currentUserSig.set({
            username: user.displayName!,
            email: user.email!
          })
        } else {
          this.authService.currentUserSig.set(null)
          this.router.navigate(["login"])
        }

      }
    })
  }

  articalObj = {
    title: "", 
    articalBody: "", 
    image: "", 
    category: ""
  }

  onCreateArticalSubmit (form: FormsModule) {

    console.log(this.authService.currentUserSig())

    this.articalObj = {
      title: "", 
      articalBody: "", 
      image: "", 
      category: ""
    }
  }

}
