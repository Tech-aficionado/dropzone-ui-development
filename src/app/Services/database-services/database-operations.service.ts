import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, observeOn, Observer, of } from 'rxjs';
import { ExistingUserSchema, NewUserSchema } from '../Schemas/Auth-schema';
import { MessageService } from 'primeng/api';

const BackendServer = 'http://127.0.0.1:8000/jholi-services';

@Injectable({
  providedIn: 'root',
})
export class DatabaseOperationsService {
  res!: any;

  constructor(private Http: HttpClient,public messageservice: MessageService) {}
  loginExistingUser(UserDetails: ExistingUserSchema) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.Http.post(
      BackendServer + '/users/phase1loginAuth',
      UserDetails,
      httpOptions,
    ).pipe(
      catchError(error => {
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
      })
    );
  }
  registerUser(UserDetails: NewUserSchema): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.Http.post(
      BackendServer + '/users/newUser',
      UserDetails,
      httpOptions,
    ).pipe(
      catchError(error => {
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
      })
    );
  }

  sendOtp(userEmail: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const input = {
      user_email: userEmail,
    };

    return this.Http.post(
      BackendServer + '/users/activateOtp',
      input,
      httpOptions,
    ).pipe(
      catchError(error => {
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
      })
    );
  }
  verifyOtp(userInput: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.Http.post(
      BackendServer + '/users/phase2loginAuth',
      userInput,
      httpOptions,
    ).pipe(
      catchError(error => {
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
      })
    );
  }

  getAllProducts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.Http.get(
      BackendServer + '/products/getProducts',
      httpOptions,
    ).pipe(
      catchError(error => {
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
      })
    );
    
  }

  getProductCategories(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.Http.get(
      BackendServer + '/products/getProductCategories',
      httpOptions,
    ).pipe(
      catchError(error => {
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
      })
    );
    
  }
}
