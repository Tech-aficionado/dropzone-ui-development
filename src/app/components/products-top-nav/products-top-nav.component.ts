import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-top-nav',
  templateUrl: './products-top-nav.component.html',
  styleUrl: './products-top-nav.component.css'
})
export class ProductsTopNavComponent {
constructor(public router: Router) {}
}
