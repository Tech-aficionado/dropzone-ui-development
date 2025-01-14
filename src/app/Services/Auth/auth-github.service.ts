import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { DynamicRouteService } from '../Routes/dynamic-route.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthGithubService implements OnInit {
  private router = inject(Router);

  constructor(
    private dynamicRoute: DynamicRouteService,
    private afAuth: AngularFireAuth,
  ) {
    this.handleRedirectResult();
  }

  login() {
    return this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  private handleRedirectResult() {
    this.afAuth
      .getRedirectResult()
      .then((result) => {
        if (result.user) {
          // User is signed in
          console.log('User signed in:', result.user);
          // Navigate to appropriate page or update UI
        }
      })
      .catch((error) => {
        console.error('Auth redirect error:', error);
      });
  }

  getUser() {
    return this.afAuth.useEmulator;
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // User is signed in, update UI or navigate
        console.log('User is signed in');
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });
  }
}
