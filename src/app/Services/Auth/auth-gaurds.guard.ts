import { CanActivateFn, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';

export const AuthenticationGaurds: CanActivateFn = (route: any, state: any) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(MessageService);
  const localstorage = inject(SecureLocalStorageService)
  const token = localstorage.getItem('Access_token') ?? false
  if (typeof(token)=='boolean') {
    router.navigate(['/login']);
    messageService.add({
      severity: 'error',
      summary: 'Unauthorised Access',
      detail: 'Kindly Login / Register to Access',
    });
    return false;
  } else {
      return true;
    
  }

  return false
};
