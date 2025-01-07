import { CanActivateFn, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';
import { Location } from '@angular/common';

export const AuthenticationGaurds: CanActivateFn = (route: any, state: any) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const location = inject(Location);
  const messageService = inject(MessageService);
  const localstorage = inject(SecureLocalStorageService);
  const token = localstorage.getItem('Access_token') ?? false;
  if (token == false) {
    router.navigate(['/login']);
    messageService.add({
      severity: 'error',
      summary: 'Unauthorised Access',
      detail: 'Kindly Login / Register to Access',
    });
    return false;
  } else if (authService.isAuthenticated(token)) {
    if (location.path() == '/login' || location.path() == '/register') {
      messageService.add({
        severity: 'info',
        summary: 'Authenticated',
        detail: 'No need to authenticate your identity',
      });

      return false;
    }

    return true;
  } else if (!authService.isAuthenticated(token)) {
    messageService.add({
      severity: 'error',
      summary: 'Session Expired',
      detail: 'Kindly login to access',
    });
    return false;
  }

  return false;
};
