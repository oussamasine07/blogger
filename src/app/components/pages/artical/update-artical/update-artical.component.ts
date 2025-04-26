import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { ArticalsService } from '../../../../services/articals/articals.service';

@Component({
  selector: 'app-update-artical',
  imports: [ FormsModule ],
  templateUrl: './update-artical.component.html',
  styleUrl: './update-artical.component.css'
})
export class UpdateArticalComponent {

  router = inject(Router)
  authService = inject(AuthService)
  articalService = inject(ArticalsService)
  dynamicRoute = inject(ActivatedRoute)

  @Input() articalId!: string;
  @Input() artical!: {
    id: string,
    title: string, 
    articalBody: string, 
    category: string,
    image: string,
    userId: string
  }
  

  ngOnInit(): void {
    this.articalId = this.dynamicRoute.snapshot.paramMap.get("articalId") || "";
    
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

    this.articalService.getArticalById(this.articalId).subscribe({
      next: (artical) => {
        this.artical = artical
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  }

  
  onUpdateArticalSubmit(form: FormsModule) {
    
    if (this.authService.currentUserSig()?.id == this.artical.userId) {
      // update the artical here
      this.articalService.updateArtical(this.artical);
      this.router.navigate(["/"])
    } else {
      console.log("unauthorized action")
    }

    this.artical = {
      ...this.artical,
      title: "", 
      articalBody: "",
      category: ""
    }
  }
}
