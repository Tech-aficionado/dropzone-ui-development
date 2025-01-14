import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-top-nav',
  templateUrl: './home-top-nav.component.html',
  styleUrl: './home-top-nav.component.css',
})
export class HomeTopNavComponent {
  constructor(public router: Router) {}
}
