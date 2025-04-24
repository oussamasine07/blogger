import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormsModule, NgForm, Validators } from "@angular/forms";

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

  onLoginSubmit(form: FormsModule) {
    console.log(this.loginObj)
    this.loginObj = {
      email: "",
      password: ""
    }
  }

}
