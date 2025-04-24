import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  fbAuth = inject(Auth)

  register (email: string, username: string, password: string): Observable<void> {
    console.log(`${email} ${username} ${password}`)
    
    const promise = createUserWithEmailAndPassword(
      this.fbAuth,
      email,
      password
    ).then(res => updateProfile(res.user, {displayName: username}));

    return from(promise);
  }

}
