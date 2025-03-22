import {
  AfterViewInit,
  Component,
  effect,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  runInInjectionContext,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { user_register_props } from './register-response-map';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { BehaviorSubject, tap } from 'rxjs';
import { GetPromptIamgeService } from 'src/app/Services/TanstackQueries/get-auth-prompt-image.service';
import {
  CreateMutationResult,
  injectQuery,
} from '@tanstack/angular-query-experimental';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthGithubService } from 'src/app/Services/Auth/auth-github.service';
import { AuthGoogleService } from 'src/app/Services/Auth/auth-google.service';
import { DynamicRouteService } from 'src/app/Services/Routes/dynamic-route.service';
import { AuthTempPageComponent } from '../auth-temp-page/auth-temp-page.component';
import {
  NewUserSchema,
  usernameCheck,
} from 'src/app/Services/Schemas/Auth-schema';
import { SecureLocalStorageService } from 'src/app/Services/SecureLocalStorage/secure-local-storage.service';
import { VerifyauthComponent } from '../verifyauth/verifyauth.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
const emailRegex = /^[^\s@]+@([^\s@]+)$/i;
const passwordRegex = new RegExp(
  ['^', '(?=.*[A-Z])', '(?=.*[a-z])', '(?=.*[0-9])', '.{8,}', '$'].join(''),
);
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [MessageService],
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  @Input() usernameId!: string;
  @Input() tt!: any;
  @Output() onBlurUsername: EventEmitter<any> = new EventEmitter();
  isloading = false;
  otpValue: any = '';
  loading = false;
  userCheckFail: any = true;
  userCheckPass: any = true;
  active: number | undefined = 0;
  usernameCheckMutateFn!: CreateMutationResult<
    Object,
    Error,
    usernameCheck,
    unknown
  >;
  registerUserMutateFn!: CreateMutationResult<
    Object,
    Error,
    NewUserSchema,
    unknown
  >;
  userCheck: any;
  progress: number = 0;
  timeProgress: number = 0;
  interval!: any;
  preservedEmail: string = '';
  mode!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    public router: Router,
    private messageService: MessageService,
    private localstorage: SecureLocalStorageService,
    private route: ActivatedRoute,
    public getProduct: GetPromptIamgeService,
    private googlesign: AuthGoogleService,
    private githubsign: AuthGithubService,
    private dynamicRoute: DynamicRouteService,
    private injector: Injector,
  ) {
    this.usernameCheckMutateFn = this.authService.checkUsernameAvailability();
    this.registerUserMutateFn = this.authService.register();
    this.form = this.fb.group({
      register_username: ['', Validators.required],
      register_firstname: ['', Validators.required],
      register_lastname: ['', Validators.required],
      register_email: [
        '',
        [Validators.required, Validators.pattern(emailRegex)],
      ],
      register_password: [
        '',
        [Validators.required, Validators.pattern(passwordRegex)],
      ],
    });
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
      [user_register_props.firstname]: this.form.value['register_firstname'],
      [user_register_props.lastname]: this.form.value['register_lastname'],
      [user_register_props.userId]: this.form.value['register_username'],
      [user_register_props.email]: this.form.value['register_email'],
      [user_register_props.password]: this.form.value['register_password'],
    };

    this.loading = true;
    this.registerUserMutateFn.mutate(values, {
      onSuccess: (res) => {
        console.log(res);
        const response = this.authService.Phase1Verification(res);
        if (response.Status == 'Already Reported') {
          this.messageService.add({
            severity: 'error',
            summary: 'Input Error',
            detail: 'Username and Password can not be empty 🧐🧐🧐',
          });
        } else if (response.Status == 'Success') {
          

          this.loading = false;
          this.localstorage.setItem(
            'UserEmail',
            values[user_register_props.email],
          );
          this.localstorage.setItem(
            'UserFirstName',
            values[user_register_props.firstname],
          );
          this.localstorage.setItem(
            'UserLastName',
            values[user_register_props.lastname],
          );
          this.dynamicRoute.addRoute(
            'verify-account',
            VerifyauthComponent,
            'Verify Your Account | Dropzone',
          );
          this.router.navigate(['verify-account']);
        }
      },
    });

    console.log(values);
  }

  signInWithGoogle() {
    this.dynamicRoute.addRoute(
      'app-google-signin-temp',
      AuthTempPageComponent,
      'Authorize',
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
      .then((result) =>
        this.router.navigate(['app-github-signin-temp'], {
          queryParams: { tokenization: JSON.stringify(result) },
        }),
      )
      .catch((error) => console.error('Login failed', error));
  }
  checkEmail() {
    if (this.form.value['register_email'] == '') return;
    this.authService.checkEmailRegistery(
      this.validateAndNormalizeEmail(this.form.value['register_email']),
      (response) => {
        if (response == 208) {
          this.messageService.add({
            severity: 'error',
            detail: 'Please use different email id',
            summary: 'Already Reported',
          });
        }
        if (response == 404) {
        }
      },
    );
  }

  ngOnInit(): void {
    this.dynamicRoute.addRoute(
      'onboarding',
      VerifyauthComponent,

      'OnBoarding | Dropzone',
    );
    // this.router.navigate(['onboarding'],{queryParams: {firstname: this.localstorage.getItem('UserFirstName'),lastname:this.localstorage.getItem('UserLastName')}});
    this.route.queryParams.subscribe((params) => {
      console.log(params['email']); // { order: "popular" }
      this.preservedEmail = params['email'];
      this.mode = params['mode'] == 'all' ? true : false;
    });

    const currentUrl = this.router.url.toLowerCase();
    if (currentUrl.includes('register') && !currentUrl.includes('?')) {
      this.router.navigate(['/register'], { queryParams: { mode: 'all' } });
    }
  }

  ngAfterViewInit(): void {
    this.form.get('register_email')?.setValue(this.preservedEmail);
    if (this.preservedEmail)
      this.form.get('register_email')?.markAllAsTouched();
  }
  checkUsernameIfAlreadyExists() {
    if (this.form.value['register_username'] == '') {
      this.userCheck = 'Username is Required';
      return;
    }
    const payload: usernameCheck = {
      user_name: this.form.value['register_username'],
    };
    this.usernameCheckMutateFn.mutate(payload, {
      onSuccess: (response) => {
        if (response == 208) {
          this.userCheckPass = true;
          this.userCheckFail = false;
          this.userCheck = 'Already Exist';
        }
        if (response == 404) {
          this.userCheckFail = true;
          this.userCheckPass = false;
          this.userCheck = 'Available';
          setTimeout(() => {
            this.userCheckPass = true;
          }, 1000);
        }
      },
      onError: (error) => {
        console.error(error);
      },
    });
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
