import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ArticalsService } from '../../../../services/articals/articals.service';

@Component({
  selector: 'app-create-artical',
  imports: [ FormsModule ],
  templateUrl: './create-artical.component.html',
  styleUrl: './create-artical.component.css'
})
export class CreateArticalComponent {

  router = inject(Router)
  authService = inject(AuthService)
  articalService = inject(ArticalsService);

  ngOnInit(): void {
    console.log(this.authService.currentUserSig())

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
          this.router.navigate(["login"])
        }

      }
    })
  }

  articalObj = {
    title: "", 
    articalBody: "",
    category: ""
  }

  onCreateArticalSubmit (form: FormsModule) {

    console.log(this.authService.currentUserSig())

    this.articalService.postArtical({...this.articalObj, userId: this.authService.currentUserSig()?.id});

    this.articalObj = {
      title: "", 
      articalBody: "", 
      category: ""
    }

    this.router.navigate(["/"])
  }

}
