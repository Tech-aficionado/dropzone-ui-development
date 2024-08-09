import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { user_register_props } from './register-response-map';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements  OnInit{
  form: FormGroup
  isloading!: boolean;

  constructor(private fb: FormBuilder,private authService: AuthService,private router: Router) {
    this.form = this.fb.group({
      register_username: ['',Validators.required],
      register_fullname: ['',Validators.required],
      register_email: ['',Validators.required],
      register_password: ['',Validators.required],

    })
  }

  onFormSubmit(
  ){
    this.isloading = true
    const values = {
      [user_register_props.fullanme]: this.form.value["register_fullname"],
      [user_register_props.userId]: this.form.value["register_username"],
      [user_register_props.email]: this.form.value["register_email"],
      [user_register_props.password]: this.form.value["register_password"]
    }
    this.authService.register(values)?.subscribe({
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
    this.isloading = false
  }








}
