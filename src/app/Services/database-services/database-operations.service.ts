import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observeOn, Observer } from 'rxjs';
import { ExistingUserSchema, NewUserSchema } from '../Schemas/Auth-schema';

const BackendServer = 'http://127.0.0.1:8000/jholi-services';

@Injectable({
  providedIn: 'root',
})
export class DatabaseOperationsService {
  res!: any;

  constructor(private Http: HttpClient) {}
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
    )

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
    );
  }

  sendOtp(userEmail:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const input = {
      user_email: userEmail
    }

    return this.Http.post(
      BackendServer + '/users/activateOtp',
      input,
      httpOptions,
    )
  }
  verifyOtp(userInput: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.Http.post(
      BackendServer + '/users/phase2loginAuth',
      userInput,
      httpOptions,
    )
  }
}
