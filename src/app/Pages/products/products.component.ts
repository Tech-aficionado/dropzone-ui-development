import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() Heading!: string;
  @Input() Triggering!: boolean;
  @Input() NavigateTo!: string;
  @Input() NavButtonText!: string;

  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([`${this.NavigateTo}`]);
  }

  items!: MenuItem[];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Categories', icon: 'pi pi-list', routerLink: '/products' },
      { label: 'Account', icon: 'pi pi-user', routerLink: '/account' },
      {
        label: 'About Us',
        icon: 'pi pi-address-book',
        routerLink: '/about-us',
      },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
