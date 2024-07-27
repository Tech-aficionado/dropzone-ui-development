import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements  OnInit{
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login__username: ['',Validators.required],
      login__password: ['',Validators.required]
    })
  }

  onSubmit(){
    console.log('Form submitted successfully!');
    console.log('Form value:', this.form.value);
  }
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  ngOnInit(){

  }
}
