import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { user_register_props } from './register-response-map';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { BehaviorSubject, tap } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers:[MessageService],
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  @Input() usernameId!: string;
  isImageDashboardView: boolean = false
  isloading = new BehaviorSubject<boolean>(false);
  imageChangedEvent:any
  uploadedimageFile!: any
  profilePicture: any = "profile__logo.png"
  croppedImage: string | null | undefined;
  completeImage = "../../../../assets/images/" + this.profilePicture

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      register_username: ['', Validators.required],
      register_fullname: ['', Validators.required],
      register_email: ['', Validators.required, Validators.email],
      register_password: ['', Validators.required],
    });
  }

  onFormSubmit() {
    this.isloading.next(true);
    const values = {
      [user_register_props.fullanme]: this.form.value['register_fullname'],
      [user_register_props.userId]: this.form.value['register_username'],
      [user_register_props.email]: this.form.value['register_email'],
      [user_register_props.password]: this.form.value['register_password'],
    };
    this.authService
      .register(values)
      ?.pipe(tap(() => {}))
      .subscribe({
        next(value) {
          console.log(value);
        },
      });
    setTimeout(() => {
      this.isloading.next(false);
    }, 2000);
    this.authService.isAuthenticated();
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  ngOnInit() {}

responsiveOptions: any[] | undefined;
  products = [
    {
      image: 'avatar__1.png',
    },
    {
      image: 'avatar__2.png',
    },
    {
      image: 'avatar__3.png',
    },
    {
      image: 'avatar__4.png',
    },
    {
      image: 'avatar__5.png',
    },
    {
      image: 'avatar__6.png',
    },
    {
      image: 'avatar__7.png',
    },
    {
      image: 'avatar__8.png',
    },
    {
      image: 'avatar__9.png',
    },
    {
      image: 'avatar__10.png',
    },
  ];

  selectImage(image:any){
    console.log(image)
    this.profilePicture=image
    this.completeImage = "../../../../assets/Avatars/" + this.profilePicture
    this.visible=  false
  }
}
