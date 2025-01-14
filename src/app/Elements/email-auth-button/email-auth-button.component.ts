import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-auth-button',
  templateUrl: './email-auth-button.component.html',
  styleUrl: './email-auth-button.component.css',
})
export class EmailAuthButtonComponent {
  @Input() loading!: boolean;
}
