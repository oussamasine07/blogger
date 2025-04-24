import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormsModule, NgForm, Validators } from "@angular/forms";
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {

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
        console.log(val);

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

}
