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
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { GetPromptIamgeService } from 'src/app/Services/TanstackQueries/get-auth-prompt-image.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { DomSanitizer } from '@angular/platform-browser';
const emailRegex = /^[^\s@]+@([^\s@]+)$/i;
const passwordRegex = new RegExp([
  '^',
  '(?=.*[A-Z])',  
  '(?=.*[a-z])',  
  '(?=.*[0-9])',  
  '(?=.*[!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>/?])',  
  '.{8,}',  
  '$'
].join(''));
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
export class RegisterComponent implements OnInit,AfterViewInit {
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
  userCheck!: any;
  progress: number = 0;
  timeProgress: number = 0;
    interval!: any;
    preservedEmail:string = ''
    mode!:boolean
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute,
    public getProduct: GetPromptIamgeService,
    private injector: Injector,
  ) {
    this.form = this.fb.group({
      register_username: ['', Validators.required],
      register_firstname: ['', Validators.required],
      register_lastname: ['', Validators.required],
      register_email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      register_password: ['', [Validators.required,Validators.pattern(passwordRegex)]],
    });
  }
  next() {
    if (this.otpValue == '1234') {
      this.loading = true;
      setTimeout(() => {
        this.isloading = this.isloading ? false : true;
        this.loading = false;
      }, 2000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Input Error',
        detail: 'Errorororororo 🧐🧐🧐',
      });
    }
  }
  onFormSubmit() {
    const values = {
      [user_register_props.fullanme]: this.form.value['register_fullname'],
      [user_register_props.userId]: this.form.value['register_username'],
      [user_register_props.email]: this.form.value['register_email'],
      [user_register_props.password]: this.form.value['register_password'],
    };

    this.visible = true;
    console.log(values);
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  checkUsernameIfAlreadyExists() {
    if (this.form.value['register_username'] == '') return;
    this.authService.checkUsernameAvailability(
      this.form.value['register_username'],
      (response) => {
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
          }, 2000);
        } else {
          console.error(response);
        }
      },
    );
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['email']); // { order: "popular" }
        this.preservedEmail = params['email']
        this.mode = params['mode'] == 'all' ? true : false
      }
    );
  }

  ngAfterViewInit(): void {
    this.form.get('register_email')?.setValue(this.preservedEmail)
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


  
}
