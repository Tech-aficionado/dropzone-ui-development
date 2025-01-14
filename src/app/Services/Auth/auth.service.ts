import { Injectable, Injector, runInInjectionContext } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DatabaseOperationsService } from '../database-services/database-operations.service';
import {
  ExistingUserSchema,
  NewUserSchema,
  UserLoginPhase2VerificationSchema,
  usernameCheck,
  UserOtpSchema,
} from '../Schemas/Auth-schema';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SecureLocalStorageService } from '../SecureLocalStorage/secure-local-storage.service';
import { result } from 'lodash';
import {
  CreateMutationResult,
  injectMutation,
  injectQuery,
  MutateOptions,
} from '@tanstack/angular-query-experimental';
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
  res!: CreateMutationResult<Object, Error, ExistingUserSchema, unknown>;
  constructor(
    private databaseOperation: DatabaseOperationsService,
    private JWTService: JwtHelperService,
    private localStorage: SecureLocalStorageService,
    private injector: Injector,
  ) {}

  public login(): CreateMutationResult<
    Object,
    Error,
    ExistingUserSchema,
    unknown
  > {
    return this.databaseOperation.loginExistingUser({} as ExistingUserSchema);
  }

  public OtpAuth(): CreateMutationResult<
    Object,
    Error,
    UserOtpSchema,
    unknown
  > {
    return this.databaseOperation.sendOtp({} as UserOtpSchema);
  }

  public Phase2Verification(): CreateMutationResult<
    Object,
    Error,
    UserLoginPhase2VerificationSchema,
    unknown
  > {
    return this.databaseOperation.verifyOtp(
      {} as UserLoginPhase2VerificationSchema,
    );
  }

  public register(): CreateMutationResult<
    Object,
    Error,
    NewUserSchema,
    unknown
  > {
    return this.databaseOperation.registerUser({} as NewUserSchema);
  }

  public isAuthenticated() {
    this.UserToken = this.localStorage.getItem('Access_token');
    const t = this.JWTService.isTokenExpired(this.UserToken);
    if (!this.JWTService.isTokenExpired(this.UserToken)) {
      return true;
    } else {
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
        Status: 'No Entries',
      };
    } else {
      if (responseCode == 404) {
        return {
          Status: 'User Not Found',
        };
      } else {
        if (responseCode == 208) {
          return {
            Status: 'Already Reported',
          };
        } else {
          if (responseCode == 401) {
            return {
              Status: "Password didn't match",
            };
          } else {
            if (responseCode == 202 || responseCode == 201) {
              return {
                Status: 'Success',
              };
            } else {
              return {
                Status: 'error',
                response: response.detail,
              };
            }
          }
        }
      }
    }
  }

  public logout() {
    this.localStorage.clear();
  }

  public checkUsernameAvailability(): CreateMutationResult<
    Object,
    Error,
    usernameCheck,
    unknown
  > {
    return this.databaseOperation.checkUsername({} as usernameCheck);
  }

  public checkEmailRegistery(email: any, callback: (result: any) => void) {
    this.databaseOperation.checkEmail(email).subscribe({
      next(value) {
        callback(value);
      },
    });
  }
}
