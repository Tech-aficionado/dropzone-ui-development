import {
  ChangeDetectorRef,
  Component,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, first, map, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';

import { AuthGoogleService } from '../../../Services/Auth/auth-google.service';
import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { SecureLocalStorageService } from 'src/app/Services/SecureLocalStorage/secure-local-storage.service';
import { ToastCloseEvent } from 'primeng/toast';
import firebase from 'firebase/compat/app';
import { Location } from '@angular/common';
const emailRegex = /^[^\s@]+@([^\s@]+)$/i;

import { AdminComponent } from '../../admin/admin.component';
import { DynamicRouteService } from 'src/app/Services/Routes/dynamic-route.service';
import { AuthTempPageComponent } from '../auth-temp-page/auth-temp-page.component';
import { AuthGithubService } from 'src/app/Services/Auth/auth-github.service';
import { result } from 'lodash';
import {
  CreateMutationResult,
  injectMutation,
} from '@tanstack/angular-query-experimental';
import { ExistingUserSchema } from 'src/app/Services/Schemas/Auth-schema';
import { VerifyauthComponent } from '../verifyauth/verifyauth.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  response!: CreateMutationResult<Object, Error, ExistingUserSchema, unknown>;
  isEmailRegistered: boolean = true;
  otpValue: any = '';
  loading = false;
  isUserLoggedIn = new BehaviorSubject<any>(false);
  isloading = new BehaviorSubject<boolean>(false);
  visible: boolean = true;
  emailCheckPass!: boolean;
  emailCheckFail!: boolean;
  emailCheck!: string;
  progress: number = 0;
  timeProgress: number = 0;
  interval!: any;

  //
  user!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private localstorage: SecureLocalStorageService,
    private cdr: ChangeDetectorRef,
    private afAuth: AngularFireAuth,
    private googlesign: AuthGoogleService,
    private githubsign: AuthGithubService,
    private injector: Injector,
    private dynamicRoute: DynamicRouteService,
  ) {
    this.response = this.authService.login();
    this.form = this.fb.group({
      login__email: [
        'agsgxharmony@gmail.com',
        [Validators.required, Validators.pattern(emailRegex)],
      ],
      login__password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit() {
    console.log(
      this.handleRedirectResult().subscribe((res) => {
        console.log(res);
      }),
    );
  }
  private handleRedirectResult() {
    return this.afAuth.user;
    // this.afAuth.authState.pipe(first()).subscribe(() => {
    //   this.afAuth.getRedirectResult().then((result) => {
    //     if (result.user) {
    //       console.log('User signed in:', result.user);
    //     }
    //   }).catch((error) => {
    //     console.error('Auth redirect error:', error);
    //   });
    // });
  }

  signInWithGoogle() {
    this.dynamicRoute.addRoute(
      'app-google-signin-temp',
      AuthTempPageComponent,
      {
        title: 'Authorize',
      },
    );
    this.googlesign.login();
  }
  signInWithGithub() {
    this.dynamicRoute.addRoute(
      'app-github-signin-temp',
      AuthTempPageComponent,
      {
        title: 'Authorize',
      },
    );
    this.githubsign
      .login()
      .then((result) => {})
      .catch((error) => console.error('Login failed', error));
  }

  onFormSubmit() {
    if (this.form.invalid)
      return this.messageService.add({
        severity: 'error',
        summary: 'Input Error',
        key: 'other',
        detail: 'Kindly fill the inputs properly...',
      });
    const values = {
      login_email: this.form.value['login__email'],
      login_password: this.form.value['login__password'],
    };
    console.log('pending on');
    this.loading = true;
    this.response.mutate(values, {
      onSuccess: (data) => {
        console.log('pending off', data);
        this.loading = false;
        const response = this.authService.Phase1Verification(data);
        if (response.Status == 'No Entries') {
          this.messageService.add({
            severity: 'error',
            key: 'other',
            summary: 'Input Error',
            detail: 'Username and Password can not be empty 🧐🧐🧐',
          });
        } else if (response.Status == 'User Not Found') {
          this.messageService.add({
            severity: 'error',
            summary: 'No User Found',
            key: 'other',
            detail: 'Username not found  😨😨😨',
          });
        } else if (response.Status == "Password didn't match") {
          this.messageService.add({
            severity: 'error',
            key: 'other',
            summary: 'Credential Error',
            detail: "Username and Password doesn't match  😨😨😨",
          });
        } else if (response.Status == 'error') {
          this.messageService.add({
            severity: 'error',
            key: 'other',
            summary: 'Something Went Wrong',
            detail: `${response.response} 😨😨😨`,
          });
        } else if (response.Status == 'Success') {
          this.messageService.add({
            severity: 'success',
            key: 'other',
            summary: 'Credentail Match',
            detail: 'Please Proceed further to authenticate 😀😀😀',
          });

          this.loading = false;
          this.localstorage.setItem('UserEmail', values.login_email);
          this.dynamicRoute.addRoute(
            'verify-auth',
            VerifyauthComponent,
            'Verify Your Auth | Dropzone',
          );
          this.router.navigate(['verify-auth']);
        }
      },
    });
  }

  checkEmail() {
    this.isEmailRegistered = true;
    if (this.form.value['login__email'] == '') return;
    this.authService.checkEmailRegistery(
      this.validateAndNormalizeEmail(this.form.value['login__email']),
      (response) => {
        if (response == 208) {
          this.isEmailRegistered = false;
        }
        if (response == 404) {
          this.messageService.add({
            severity: 'error',
            summary: 'Account Not Found!!🧐🧐',
            life: 50000,
            key: 'confirm',
          });
          this.visible = true;
          this.progressBar();
        } else {
          console.error(response);
        }
      },
    );
  }

  onClose() {
    this.visible = false;
    this.messageService.clear('confirm');
  }

  progressBar() {
    this.progress = 0;
    this.timeProgress = 5;

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      if (this.progress <= 100) {
        this.progress = this.progress + 20;
        this.timeProgress = this.timeProgress - 1;
      }

      if (this.progress >= 100) {
        this.progress = 100;
        if (this.visible)
          this.router.navigate(['register'], {
            queryParams: {
              email: this.validateAndNormalizeEmail(
                this.form.value['login__email'],
              ),
              mode: 'email',
            },
          });
        clearInterval(this.interval);
      }
      this.cdr.markForCheck();
    }, 1000);
  }

  validateAndNormalizeEmail(email: any) {
    const match = email.match(emailRegex);
    if (match) {
      const [, domain] = match;
      console.log(email.replace(domain, domain.toLowerCase()));
      return email.replace(domain, domain.toLowerCase());
    }
    return null; // Invalid email
  }
}
