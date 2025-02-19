import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-auth-button',
  templateUrl: './google-auth-button.component.html',
  styleUrl: './google-auth-button.component.css',
})
export class GoogleAuthButtonComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() loading: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.router.url.toLowerCase().includes('register'))
      this.show = this.router.url.toLowerCase().includes('all') ? true : false;
  }
}
