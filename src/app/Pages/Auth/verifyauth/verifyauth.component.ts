import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateMutationResult } from '@tanstack/angular-query-experimental';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DynamicRouteService } from 'src/app/Services/Routes/dynamic-route.service';
import {
  UserLoginPhase2VerificationSchema,
  UserOtpSchema,
} from 'src/app/Services/Schemas/Auth-schema';
import { SecureLocalStorageService } from 'src/app/Services/SecureLocalStorage/secure-local-storage.service';
import { OnboardingComponent } from '../onboarding/onboarding.component';

@Component({
  selector: 'app-verifyauth',
  templateUrl: './verifyauth.component.html',

  styleUrl: './verifyauth.component.css',
})
export class VerifyauthComponent implements OnInit {
  value!: FormGroup;
  OtpMutateFn!: CreateMutationResult<Object, Error, UserOtpSchema, unknown>;
  Phase2MutateFn!: CreateMutationResult<
    Object,
    Error,
    UserLoginPhase2VerificationSchema,
    unknown
  >;
  newUser: boolean = false;
  loading!: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private dynamicRoute: DynamicRouteService,
    private localstorage: SecureLocalStorageService,
    private messageService: MessageService,
  ) {
    this.OtpMutateFn = this.authService.OtpAuth();
    this.Phase2MutateFn = this.authService.Phase2Verification();
  }

  ngOnInit(): void {
    this.activateOtpAuthentication(this.localstorage.getItem('UserEmail'));
    this.newUser = this.router.url.includes('verify-account');
  }
  Phase2Authentication() {
    this.loading = true;
    const input = {
      user_email: this.localstorage.getItem('UserEmail'),
      otp: Number(this.value),
    };
    this.Phase2MutateFn.mutate(input, {
      onSuccess: (data: any, variables, context) => {
        console.log(data.status_code)
        if(data.status_code == 401){
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Verification Failed',
            detail: "Resend the otp to re-verify your account",
          });
        }else{
          this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: "Let's Move On 😀😀😀",
        });
        const res = this.authService.authentications180(data);

        if (res) {
          if (this.newUser) {
            this.router.navigate(['auth/onboarding'], {
              queryParams: {
                firstname: this.localstorage.getItem('UserFirstName'),
                lastname: this.localstorage.getItem('UserLastName'),
              },
            });
          } else {
            this.router.navigate(['products']);
            this.dynamicRoute.clearRoutes();
          }
        }
        }
      },

      onError: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Sorry',
          detail: 'Something went wrong...😨😨😨',
        });
      },
    });
  }
  ResendOtpAuthentication() {}

  activateOtpAuthentication(userEmail: any) {
    this.loading = true;
    const payload = {
      user_email: userEmail,
      attempt: 1,
    };
    this.OtpMutateFn.mutate(payload, {
      onSuccess: (data) => {
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Otp Sent',
          detail: 'Please check your mailbox 😀😀😀',
        });
      },
      onError: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Otp Error',
          detail: 'Something went wrong',
        });
      },
    });
  }
}
