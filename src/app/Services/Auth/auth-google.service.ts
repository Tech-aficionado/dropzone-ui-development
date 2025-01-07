import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { DynamicRouteService } from '../Routes/dynamic-route.service';
import { AdminComponent } from 'src/app/Pages/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private oAuthService = inject(OAuthService);
  private router = inject(Router);

  constructor(
    private dynamicRoute: DynamicRouteService
  ) {
    this.initConfiguration();
  }

  initConfiguration() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '329132298298-h0rt4dcphtfh1eja6v3stl5fbk50m489.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/app-google-signin-temp',
      scope: 'openid profile email',
  responseType: 'id_token token'
    };

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
    const profile = this.oAuthService.getIdentityClaims();
    console.log(profile)
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
}
