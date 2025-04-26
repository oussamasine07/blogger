import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  router = inject(Router)

  loginObj = {
    email: "",
    username: "",
    password: ""
  }

  authService = inject(AuthService);

  errorMessage: string | null = null;

  onSubmit (form: FormsModule) {
    console.log(this.loginObj);
    this.authService.register(
      this.loginObj.email, 
      this.loginObj.username, 
      this.loginObj.password
    ).subscribe({
      next: (val) => {
        console.log("user added");
        this.router.navigate(["/login"])
      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    })


    this.loginObj = {
      email: "",
      username: "",
      password: ""
    }
  }

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
        
        if (this.authService.currentUserSig()) {
          this.router.navigate(["/"])
        }
      }
    })
  }
  
}
