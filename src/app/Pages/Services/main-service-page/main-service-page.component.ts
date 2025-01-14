import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-service-page',
  templateUrl: './main-service-page.component.html',
  styleUrl: './main-service-page.component.css',
})
export class MainServicePageComponent {
  constructor(public router: Router) {}
}
