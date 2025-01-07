import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { DynamicRouteService } from '../Routes/dynamic-route.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthGithubService {

  private oAuthService = inject(OAuthService);
  private router = inject(Router);

  constructor(
    private dynamicRoute: DynamicRouteService,
    private afAuth: AngularFireAuth
  ) {
  }

  

  login() {
    return this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    const profile = this.oAuthService.getIdentityClaims();
    console.log(profile)
    return profile;
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }
  getUser() {
    return this.afAuth.user;
  }
}
