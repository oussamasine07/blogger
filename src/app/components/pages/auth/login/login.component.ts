import { Component, inject, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormsModule, NgForm, Validators } from "@angular/forms";
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent implements OnInit {

  router = inject(Router)

  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  loginObj = {
    email: "",
    password: ""
  }

  authService = inject(AuthService);
  errorMessage: string | null = null;

  onLoginSubmit(form: FormsModule) {

    this.authService.login(this.loginObj.email, this.loginObj.password).subscribe({
      next: (val) => {
        console.log("youare logged in")

      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    })
    
    this.loginObj = {
      email: "",
      password: ""
    }
  }

  ngOnInit(): void {
    console.log(this.authService.currentUserSig())

    this.authService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.authService.currentUserSig.set({
            username: user.displayName!,
            email: user.email!,
            id: user.tenantId!
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
