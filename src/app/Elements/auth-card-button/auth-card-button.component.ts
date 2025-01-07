import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-card-button',
  templateUrl: './auth-card-button.component.html',
  styleUrl: './auth-card-button.component.css'
})
export class AuthCardButtonComponent {
@Input() Title!: string
@Input() disabled!: boolean
}
