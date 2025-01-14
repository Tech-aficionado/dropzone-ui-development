import {
  inject,
  Injectable,
  Injector,
  runInInjectionContext,
} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  catchError,
  lastValueFrom,
  Observable,
  observeOn,
  Observer,
  of,
} from 'rxjs';
import {
  ExistingUserSchema,
  NewUserSchema,
  UserLoginPhase2VerificationSchema,
  usernameCheck,
  UserOtpSchema,
} from '../Schemas/Auth-schema';
import { MessageService } from 'primeng/api';
import { BackendIP } from 'Konstants';
import {
  CreateMutationResult,
  injectMutation,
  mutationOptions,
  QueryClient,
} from '@tanstack/angular-query-experimental';

const BackendServer = `${BackendIP}/jholi-services`;

@Injectable({
  providedIn: 'root',
})
export class DatabaseOperationsService {
  res!: any;

  queryClient = new QueryClient();

  constructor(
    private Http: HttpClient,
    private injector: Injector,
    public messageservice: MessageService,
  ) {}
  loginExistingUser(UserDetails: ExistingUserSchema): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      }),
    };
    return injectMutation(() => ({
      mutationFn: (UserDetails: ExistingUserSchema) =>
        lastValueFrom(
          this.Http.post(
            `${BackendServer}/users/phase1loginAuth`,
            UserDetails,
            httpOptions,
          ),
        ),
      mutationKey: ['login-details'],
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['login-details'] });
      },
      onError: (error: Error) => {
        console.error('Server is offline or unreachable');
        this.messageservice.add({
          severity: 'error',
          summary: 'Offline',
          detail: 'Woopsy Woopsy... Server is offline',
        });
      },
    }));
  }

  sendOtp(userEmail: UserOtpSchema) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      }),
    };
    return injectMutation(() => ({
      mutationFn: (input: UserOtpSchema) =>
        lastValueFrom(
          this.Http.post(
            `${BackendServer}/users/activateOtp`,
            input,
            httpOptions,
          ),
        ),
      mutationKey: ['otp-details'],
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['otp-details'] });
      },
      onError: (error: Error) => {
        console.error('Server is offline or unreachable');
        this.messageservice.add({
          severity: 'error',
          summary: 'Offline',
          detail: 'Woopsy Woopsy... Server is offline',
        });
      },
    }));
  }
  verifyOtp(userInput: UserLoginPhase2VerificationSchema) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      }),
    };
    return injectMutation(() => ({
      mutationFn: (input: UserLoginPhase2VerificationSchema) =>
        lastValueFrom(
          this.Http.post(
            `${BackendServer}/users/phase2loginAuth`,
            input,
            httpOptions,
          ),
        ),
      mutationKey: ['otp-verified'],
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['otp-verified'] });
      },
      onError: (error: Error) => {
        console.log('Server is offline or unreachable', error.message);
        this.messageservice.add({
          severity: 'error',
          summary: 'Offline',
          detail: 'Woopsy Woopsy... Server is offline',
        });
      },
    }));
  }
  registerUser(UserDetails: NewUserSchema) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      }),
    };

    return injectMutation(() => ({
      mutationFn: (input: NewUserSchema) =>
        lastValueFrom(
          this.Http.post(`${BackendServer}/users/newUser`, input, httpOptions),
        ),
      mutationKey: ['new-user'],
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['new-user'] });
      },
      onError: (error: Error) => {
        console.error('Server is offline or unreachable');
        this.messageservice.add({
          severity: 'error',
          summary: 'Offline',
          detail: 'Woopsy Woopsy... Server is offline',
        });
      },
    }));
  }

  checkUsername(username: usernameCheck) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      }),
    };

    return injectMutation(() => ({
      mutationFn: (input: usernameCheck) =>
        lastValueFrom(
          this.Http.post(
            `${BackendServer}/users/checkUsername`,
            input,
            httpOptions,
          ),
        ),
      mutationKey: ['username-check'],
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['username-check'] });
      },
      onError: (error: Error) => {
        console.error('Server is offline or unreachable');
        this.messageservice.add({
          severity: 'error',
          summary: 'Offline',
          detail: 'Woopsy Woopsy... Server is offline',
        });
      },
    }));
  }

  checkEmail(email: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      }),
    };

    const input = {
      email: email,
    };

    return this.Http.post(
      BackendServer + '/users/checkEmailRegistry',
      input,
      httpOptions,
    ).pipe(
      catchError((error) => {
        if (error.status === 0) {
          console.error('Server is offline or unreachable');
          this.messageservice.add({
            severity: 'error',
            summary: 'Offline',
            detail: 'Woopsy Woopsy... Server is offline',
          });
          // Handle offline scenario (e.g., use cached data or show error message)
          return of(null); // Return a default value or cached data
        }
        throw error; // Rethrow other errors
      }),
    );
  }
}
