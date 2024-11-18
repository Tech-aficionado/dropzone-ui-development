import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  items!: MenuItem[];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Products', icon: 'pi pi-list', routerLink: '/products' },
      { label: 'Account', icon: 'pi pi-user', routerLink: '/account' },
    ];

    this.activeItem = this.items[0];
  }
}
