import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UserInterface } from '../../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  fbAuth = inject(Auth)

  user$ = user(this.fbAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined)

  register (email: string, username: string, password: string): Observable<void> {

    const promise = createUserWithEmailAndPassword(
      this.fbAuth,
      email,
      password
    ).then(res => updateProfile(res.user, {displayName: username}));

    return from(promise);
  }

  login (email: string, password: string): Observable<void> {

    const promise = signInWithEmailAndPassword(
      this.fbAuth,
      email,
      password
    ).then(() => {});

    return from(promise)

  } 

  logout (): Observable<void> {
    const promise = signOut(this.fbAuth)
    return from(promise);
  }

}
