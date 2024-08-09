import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements  OnInit{
  form: FormGroup
  isloading = false

  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.form = this.fb.group({
      login__username: ['',Validators.required],
      login__password: ['',Validators.required]
    })
  }

  onFormSubmit(){
    this.isloading = true
    const values = {
      login_username: this.form.value["login__username"],
      login_password: this.form.value["login__password"]
    }
    this.authService.login(values)?.subscribe({
      next(value) {
        console.log(value)
      },
    })
    this.isloading = false
  }
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  ngOnInit(){

  }
}
