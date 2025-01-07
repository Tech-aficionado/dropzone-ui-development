import {
  Component,
  effect,
  Injector,
  Input,
  runInInjectionContext,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  pContextItems!: any;

  constructor() {}

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  items!: MenuItem[];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.pContextItems = [
      {
        label: 'Translate',
        icon: 'pi pi-language',
      },
      {
        label: 'Speech',
        icon: 'pi pi-volume-up',
        items: [
          {
            label: 'Start',
            icon: 'pi pi-caret-right',
          },
          {
            label: 'Stop',
            icon: 'pi pi-pause',
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: 'Print',
        icon: 'pi pi-print',
      },
    ];

    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },

      { label: 'Account', icon: 'pi pi-user', routerLink: '/account' },
      {
        label: 'Categories',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Adidas',
            items: [
              {
                label: 'Sneakers',
              },
              {
                label: 'Top Wear',
              },
              {
                label: 'Trekking Suit',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Puma',
            items: [
              {
                label: 'Sneakers',
              },
              {
                label: 'Top Wear',
              },
              {
                label: 'Trekking Suit',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'U.S. Polo',
            items: [
              {
                label: 'Sneakers',
              },
              {
                label: 'Top Wear',
              },
              {
                label: 'Trekking Suit',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Nike',
            items: [
              {
                label: 'Sneakers',
              },
              {
                label: 'Top Wear',
              },
              {
                label: 'Trekking Suit',
              },
            ],
          },
        ],
      },
      {
        label: 'About Us',
        icon: 'pi pi-address-book',
        routerLink: '/about-us',
      },
    ];
  }
}
