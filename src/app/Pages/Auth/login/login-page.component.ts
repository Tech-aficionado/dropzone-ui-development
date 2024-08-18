import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers:[MessageService]
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  response!: any
  isUserLoggedIn = new BehaviorSubject<any>(false);
  isloading = new BehaviorSubject<boolean>(false);
  visible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      login__username: ['', Validators.required],
      login__password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  onFormSubmit() {
    const values = {
      login_email: this.form.value['login__username'],
      login_password: this.form.value['login__password'],
    };
    this.authService.login(values,(response)=>{
      this.response = response
      console.log(response)
      if(this.response.LoginStatus == "No Entries"){
        this.messageService.add({
          severity: 'error',
          summary: 'Input Error',
          detail: 'Username and Password can not be empty 🧐🧐🧐',
        });
      }else if(this.response.LoginStatus == "User Not Found"){
        this.messageService.add({
          severity: 'error',
          summary: 'No User Found',
          detail: 'Username not found  😨😨😨',
        });
      }else if(this.response.LoginStatus == "Password didn't match"){
        this.messageService.add({
          severity: 'error',
          summary: 'Credentail Error',
          detail: "Username and Password doesn't match  😨😨😨",
        });
      }else if(this.response.LoginStatus == "Success"){
        this.messageService.add({
          severity: 'success',
          summary: 'Credentail Match',
          detail: "Please Proceed further to authenticate 😀😀😀",
        });
        this.visible = true
      }
    }); 
  }

  activateOtpAuthentication(userEmail: string){

  }

}
