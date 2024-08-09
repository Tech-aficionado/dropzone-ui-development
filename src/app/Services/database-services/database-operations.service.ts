import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, observeOn } from 'rxjs';
import { ExistingUserSchema, NewUserSchema } from '../Schemas/Auth-schema';
const BackendServer = "http://127.0.0.1:8000/jholi-services"

@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {

  constructor(private Http: HttpClient) { }
  loginExistingUser(UserDetails: ExistingUserSchema): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
      
    };
    
    return this.Http.post(BackendServer +"/users/existingUser",UserDetails,httpOptions)
  }
  registerUser(UserDetails: NewUserSchema): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
      
    };
    
    return this.Http.post(BackendServer +"/users/newUser",UserDetails,httpOptions)
  }
}
