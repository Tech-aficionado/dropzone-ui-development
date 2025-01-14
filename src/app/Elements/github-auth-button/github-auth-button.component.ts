import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-auth-button',
  templateUrl: './github-auth-button.component.html',
  styleUrl: './github-auth-button.component.css',
})
export class GithubAuthButtonComponent {
  @Input() show: boolean = true;
  @Input() loading: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
   if (this.router.url.toLowerCase().includes('register'))  this.show = this.router.url.toLowerCase().includes('all') ? true : false;
  }
}
