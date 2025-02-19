import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent implements OnInit {
UserName!: string
UserMail!: string

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((response)=>{
      console.log(response)
    })
  }
}
