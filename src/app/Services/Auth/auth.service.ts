import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DatabaseOperationsService } from '../database-services/database-operations.service';
import { ExistingUserSchema, NewUserSchema } from '../Schemas/Auth-schema';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';
import { result } from 'lodash';
const CurrentDate = new Date();
// import * as tt from 'jsonwebtoken'

const SECRET =
  'e2ba563d5638da4cb3fe296290357ed69aebbf49c86e1f31b23aada3b491141eee538c9fd5439ec88';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserLoggedIn!: Observer<boolean>;
  UserToken!: any;
  res!: any;
  constructor(
    private databaseOperation: DatabaseOperationsService,
    private JWTService: JwtHelperService,
    private localStorage: SecureLocalStorageService,
  ) {}

  public login(
    UserDetails: ExistingUserSchema,
    callback: (result: any) => void,
  ) {
    return this.databaseOperation.loginExistingUser(UserDetails).subscribe({
      next: (value) => {
        const res = this.Phase1Verification(value);
        callback(res);
      },
      error: (err) => {
        this.res = err;
      },
    });
  }

  public register(UserDetails: NewUserSchema): Observable<any> | undefined {
    let res: string | undefined = undefined;
    this.databaseOperation.registerUser(UserDetails).subscribe({
      next(response) {
        res = response;
      },
      error(err) {
        res = err;
      },
    });
    return res;
  }

  public isAuthenticated(token: string) {
    this.UserToken = token;
    const t = this.JWTService.isTokenExpired(token);
    if (!this.JWTService.isTokenExpired(token)) {
      return true;
    } else {
      alert('InValid Token');
      return false;
    }
  }

  public authentications180(response: any) {
    if (response.status_code == 200) {
      const Bearer_token = response.access_token;
      if (this.JWTService.isTokenExpired(Bearer_token)) {
        return 'Expired';
      } else {
        const expiry_time = String(
          this.JWTService.getTokenExpirationDate(Bearer_token),
        );
        const login_time = `Time: HH:${CurrentDate.getHours()}MM:${CurrentDate.getMinutes()}SS:${CurrentDate.getSeconds()}, Date: DD:${CurrentDate.getDate()}MM:${CurrentDate.getMonth() + 1}:YYYY:${CurrentDate.getFullYear()}`;
        const token = Bearer_token;

        this.localStorage.setItem('expiry_time', expiry_time);
        this.localStorage.setItem('login_time', login_time);
        this.localStorage.setItem('Access_token', token);
        return {
          LoginStatus: true,
          login_time: login_time,
          expiry_time: expiry_time,
          token: token,
        };
      }
    } else {
      return {
        LoginStatus: false,
      };
    }
  }

  public Phase1Verification(response: any) {
    let responseCode = response.status_code;
    if (responseCode == 203) {
      return {
        LoginStatus: 'No Entries',
      };
    } else {
      if (responseCode == 404) {
        return {
          LoginStatus: 'User Not Found',
        };
      } else {
        if (responseCode == 401) {
          return {
            LoginStatus: "Password didn't match",
          };
        } else {
          return {
            LoginStatus: 'Success',
          };
        }
      }
    }
  }

  public OtpAuth(useremail: string, callback: (result: any) => void) {
    return this.databaseOperation.sendOtp(useremail).subscribe({
      next(value) {
        callback(value);
      },
    });
  }

  public Phase2Verification(response: any, callback: (result: any) => void) {
    this.databaseOperation.verifyOtp(response).subscribe({
      next: (value) => {
        const verify = this.authentications180(value);
        callback(verify);
      },
    });
  }

  public logout() {
    this.localStorage.clear();
  }

  public checkUsernameAvailability(
    username: any,
    callback: (result: any) => void,
  ) {
    this.databaseOperation.checkUsername(username).subscribe({
      next(value) {
        callback(value);
      },
    });
  }

  public checkEmailRegistery(
    email: any,
    callback: (result: any) => void,
  ) {
    this.databaseOperation.checkEmail(email).subscribe({
      next(value) {
        callback(value);
      },
    });
  }
}
