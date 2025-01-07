import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';

import { AuthGoogleService } from '../../../Services/Auth/auth-google.service';
import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { SecureLocalStorageService } from 'src/app/Services/SecureLocalStorage/secure-local-storage.service';
import gsap from 'gsap';
import { ToastCloseEvent } from 'primeng/toast';
import firebase from 'firebase/compat/app';
import { Location } from '@angular/common';
const emailRegex = /^[^\s@]+@([^\s@]+)$/i;
import { GoogleLoginProvider, FacebookLoginProvider,SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { AdminComponent } from '../../admin/admin.component';
import { DynamicRouteService } from 'src/app/Services/Routes/dynamic-route.service';
import { AuthTempPageComponent } from '../auth-temp-page/auth-temp-page.component';
import { AuthGithubService } from 'src/app/Services/Auth/auth-github.service';
import { result } from 'lodash';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  response!: any;
  isEmailRegistered: boolean = true
  otpValue: any = '';
  loading = new BehaviorSubject<Boolean>(false);
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
  socialUser!: SocialUser;
  user!: string

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private localstorage: SecureLocalStorageService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private googlesign: AuthGoogleService,
    private githubsign: AuthGithubService,
    private dynamicRoute: DynamicRouteService
  ) {
    this.form = this.fb.group({
      login__email: ['', [Validators.required,Validators.pattern(emailRegex)]],
      login__password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }
  ngOnInit() {
    // this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
    //   this.socialUser = user;
    //   console.log(user);
    // }).catch(err => {
    //   console.error(err);
    // });
    this.dynamicRoute.clearRoutes()
  }


  signInWithGoogle() {
    this.dynamicRoute.registerComponent('auth-temp-page', AuthTempPageComponent);

    
    this.dynamicRoute.addRoute('app-google-signin-temp', AuthTempPageComponent, {
      title: 'Authorize'
    });
    this.googlesign.login()
  }
 signInWithGithub() {
    this.dynamicRoute.registerComponent('auth-temp-page', AuthTempPageComponent);

    
    this.dynamicRoute.addRoute('app-github-signin-temp', AuthTempPageComponent, {
      title: 'Authorize'
    });
     this.githubsign.login()
      .then(result => this.router.navigate(['app-github-signin-temp'],{queryParams:{tokenization:JSON.stringify(result)}}))
      .catch(error => console.error('Login failed', error));
  }



  onFormSubmit() {
    if (this.form.invalid) return this.messageService.add({
      severity: 'error',
      summary: 'Input Error',
          key: 'other',
      detail: 'Kindly fill the inputs properly...',
    });
    const values = {
      login_email: this.form.value['login__email'],
      login_password: this.form.value['login__password'],
    };
    this.authService.login(values, (response) => {
      this.response = response;
      if (this.response.LoginStatus == 'No Entries') {
        this.messageService.add({
          severity: 'error',
          key: 'other',
          summary: 'Input Error',
          detail: 'Username and Password can not be empty 🧐🧐🧐',
        });
      } else if (this.response.LoginStatus == 'User Not Found') {
        this.messageService.add({
          severity: 'error',
          summary: 'No User Found',
          key: 'other',
          detail: 'Username not found  😨😨😨',
        });
      } else if (this.response.LoginStatus == "Password didn't match") {
        this.messageService.add({
          severity: 'error',
          key: 'other',
          summary: 'Credential Error',
          detail: "Username and Password doesn't match  😨😨😨",
        });
      } else if (this.response.LoginStatus == 'Success') {
        this.messageService.add({
          severity: 'success',
          key: 'other',
          summary: 'Credentail Match',
          detail: 'Please Proceed further to authenticate 😀😀😀',
        });
        setTimeout(() => {
          this.localstorage.setItem('UserEmail', values.login_email);
          this.visible = true;
          this.loading.next(true);
          this.activateOtpAuthentication(values.login_email);
        }, 1000);
      }
    });
  }
  Phase2Authentication() {
    const input = {
      user_email: this.localstorage.getItem('UserEmail'),
      otp: Number(this.otpValue),
    };
    this.authService.Phase2Verification(input, (res) => {
      if (res.LoginStatus == true) {
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: "Let's Move On 😀😀😀",
        });
        setTimeout(() => {
          this.router.navigate(['products']);
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Otp Error',
          detail: 'Please try again...😨😨😨',
        });
      }
    });
  }
  ResendOtpAuthentication() {}

  activateOtpAuthentication(userEmail: string) {
    this.authService.OtpAuth(userEmail, (response) => {
      if (response.statuscode == 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Otp Sent',
          detail: 'Please check your mailbox 😀😀😀',
        });

        this.loading.next(false);
        console.log(this.loading);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Otp Error',
          detail: 'Something went wrong',
        });
      }
    });
  }



  checkEmail() {
    this.isEmailRegistered = true
    if (this.form.value['login__email'] == '') return;
    this.authService.checkEmailRegistery(
      this.validateAndNormalizeEmail(this.form.value['login__email']),
      (response) => {
        if (response == 208) {
          this.isEmailRegistered = false
        }
        if (response == 404) { 
          this.messageService.add({
          severity: 'error',
          summary: 'Account Not Found!!🧐🧐',
          life: 50000,
          key: 'confirm'
        });
        this.visible = true;
        this.progressBar();

        } else {
          console.error(response);
        }
      },
    );
  }
   onSignIn(googleUser:any) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  onClose() {
    this.visible = false;
    this.messageService.clear('confirm')

}

  progressBar(){
    this.progress = 0;
    this.timeProgress = 5;

            if (this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => {
                if (this.progress <= 100) {
                    this.progress = this.progress + 20;
                    this.timeProgress = this.timeProgress - 1
                }

                if (this.progress >= 100) {
                    this.progress = 100;
                    if (this.visible) this.router.navigate(['register'],{queryParams:{email: this.validateAndNormalizeEmail(this.form.value['login__email']),mode:'email'}})
                    clearInterval(this.interval);
                }
                this.cdr.markForCheck();
            }, 1000);
  }

   validateAndNormalizeEmail(email:any) {
    const match = email.match(emailRegex);
    if (match) {
      const [, domain] = match;
      console.log(email.replace(domain, domain.toLowerCase()))
      return email.replace(domain, domain.toLowerCase());
    }
    return null; // Invalid email
  }
}
