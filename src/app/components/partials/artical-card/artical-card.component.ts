import { Component, inject, Input } from '@angular/core';
import { TruncatePipe } from '../../../pips/truncate.pipe';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { UserInterface } from '../../../interfaces/user-interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-artical-card',
  imports: [ TruncatePipe, RouterLink, NgIf],
  templateUrl: './artical-card.component.html',
  styleUrl: './artical-card.component.css'
})
export class ArticalCardComponent {

  authService = inject(AuthService)

  @Input() artical!: {
    id: string,
    title: string, 
    articalBody: string, 
    image: string,
    category: string,
    userId: string
  } 

  currentUser: UserInterface | null | undefined = null;

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

        this.currentUser = this.authService.currentUserSig()
        console.log(this.currentUser)
        
      }
    })
  }
}
