import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { SecureLocalStorageService } from 'src/app/Services/SecureLocalStorage/secure-local-storage.service';
import gsap from 'gsap';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  response!: any;
  otpValue: any = '';
  loading = new BehaviorSubject<Boolean>(false);
  isUserLoggedIn = new BehaviorSubject<any>(false);
  isloading = new BehaviorSubject<boolean>(false);
  visible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private localstorage: SecureLocalStorageService,
    private messageService: MessageService,
  ) {
    this.form = this.fb.group({
      login__username: ['agsgxharmony@gmail.com', Validators.required],
      login__password: ['string', Validators.required],
    });
  }
  ngOnInit() {}

  onFormSubmit() {
    const values = {
      login_email: this.form.value['login__username'],
      login_password: this.form.value['login__password'],
    };
    this.authService.login(values, (response) => {
      this.response = response;
      console.log(response);
      if (this.response.LoginStatus == 'No Entries') {
        this.messageService.add({
          severity: 'error',
          summary: 'Input Error',
          detail: 'Username and Password can not be empty 🧐🧐🧐',
        });
      } else if (this.response.LoginStatus == 'User Not Found') {
        this.messageService.add({
          severity: 'error',
          summary: 'No User Found',
          detail: 'Username not found  😨😨😨',
        });
      } else if (this.response.LoginStatus == "Password didn't match") {
        this.messageService.add({
          severity: 'error',
          summary: 'Credentail Error',
          detail: "Username and Password doesn't match  😨😨😨",
        });
      } else if (this.response.LoginStatus == 'Success') {
        this.messageService.add({
          severity: 'success',
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
      otp: this.otpValue,
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
}
