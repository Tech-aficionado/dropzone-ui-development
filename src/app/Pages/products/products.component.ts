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
  products_shoes = [
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e745acb29cd248e8994a6820a4ac6a29_9366/GAZELLE_BOLD_SHOES_Yellow_IF5937_01_standard.jpg',
      pt: 'Adidas Gazelle Bold Shoes',
      pp: '120',
      pr: '4',
      pd: 'Iconic Adidas Gazelle Bold shoes with a vibrant yellow colorway. ',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
      pt: 'Adidas Superstar Shoes',
      pp: '90',
      pr: '2',
      pd: 'Timeless Adidas Superstar shoes in classic white.',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/69721f2e7c934d909168a80e00818569_9366/STAN_SMITH_SHOES_White_FX5501_01_standard.jpg',
      pt: 'Adidas Stan Smith Shoes',
      pp: '85',
      pr: '5',
      pd: 'Clean and minimalist Adidas Stan Smith shoes. ',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
      pt: 'Adidas Superstar Shoes',
      pp: '90',
      pr: '3.5',
      pd: 'Another variant of the iconic Adidas Superstar. ',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/69721f2e7c934d909168a80e00818569_9366/STAN_SMITH_SHOES_White_FX5501_01_standard.jpg',
      pt: 'Adidas Stan Smith Shoes',
      pp: '85',
      pr: '1',
      pd: 'Alternative colorway of the classic Stan Smith. ',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/69721f2e7c934d909168a80e00818569_9366/STAN_SMITH_SHOES_White_FX5501_01_standard.jpg',
      pt: 'Adidas Stan Smith Shoes',
      pp: '85',
      pr: '5',
      pd: 'Clean and minimalist Adidas Stan Smith shoes. ',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg',
      pt: 'Adidas Superstar Shoes',
      pp: '90',
      pr: '3.5',
      pd: 'Another variant of the iconic Adidas Superstar. ',
    },
    {
      pis: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/69721f2e7c934d909168a80e00818569_9366/STAN_SMITH_SHOES_White_FX5501_01_standard.jpg',
      pt: 'Adidas Stan Smith Shoes',
      pp: '85',
      pr: '1',
      pd: 'Alternative colorway of the classic Stan Smith. ',
    },
  ];

  products_sweatshirts = [
    {
      pis: 'https://cdn05.nnnow.com/web-images/medium/styles/BQ20T3C3LV1/1683029760493/1.jpg',
      pt: 'U.S. Polo Assn. Crew Neck Solid Cotton Sweatshirt',
      pp: '1481.00',
      pr: '4.3',
      pd: 'Stylish crew neck sweatshirt from U.S. Polo Assn.',
      size: 'S-XXL',
    },
    {
      pis: 'https://cdn00.nnnow.com/web-images/medium/styles/4SUK4CWJ2IL/1683022462530/1.jpg',
      pt: 'U.S. Polo Assn. Crew Neck Heathered Typography Print Sweatshirt',
      pp: '1310.00',
      pr: '4.3',
      pd: 'Heathered sweatshirt from U.S. Polo Assn.',
      size: 'M-XXL',
    },
    {
      pis: 'https://cdn05.nnnow.com/web-images/medium/styles/6HHA6BJ0FNV/1683026344766/1.jpg',
      pt: 'U.S. Polo Assn. Embroidered Logo Hooded Sweatshirt',
      pp: '2051.00',
      pr: '4.3',
      pd: 'Classic navy hooded sweatshirt  from U.S. Polo Assn.',
      size: 'S-XXL',
    },
    {
      pis: 'https://cdn14.nnnow.com/web-images/medium/styles/DQWF1G0U8AZ/1683029767537/1.jpg',
      pt: 'U.S. Polo Assn. Denim Co. Brand Print Pure Cotton Sweatshirt',
      pp: '1709.00',
      pr: '4.3',
      pd: 'A pure cotton sweatshirt U.S. Polo Assn. Denim Co.',
      size: 'M-XXL',
    },
    {
      pis: 'https://cdn12.nnnow.com/web-images/medium/styles/093ISLNOV0E/1680775391591/1.jpg',
      pt: 'Flying Machine Typographic Print Sweat Shirt',
      pp: '1599.00',
      pr: '4.2',
      pd: 'Navy sweatshirt from the brand Flying Machine.',
      size: 'M-XXL',
    },
  ];

  products_jeans = [
    {
      pis: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
      pt: 'Denim Co. Straight Fit Light Distressed Jeans',
      pp: '2799.00',
      pr: '4.3',
      pd: 'Lightly distressed straight fit jeans with authentic wash',
      size: '30-38',
      color: 'Light Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1475178626620-a4d074967452',
      pt: 'Denim Co. Relaxed Fit Mid Wash Jeans',
      pp: '2999.00',
      pr: '4.5',
      pd: 'Comfortable mid wash relaxed fit jeans',
      size: '30-40',
      color: 'Medium Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb',
      pt: 'Denim Co. Skinny Fit Black Jeans',
      pp: '2299.00',
      pr: '4.2',
      pd: 'Classic black skinny fit jeans',
      size: '28-36',
      color: 'Black'
    },
    {
      pis: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
      pt: 'Denim Co. Wide Leg High Rise Jeans',
      pp: '3199.00',
      pr: '4.4',
      pd: 'Trendy high rise wide leg jeans',
      size: '28-36',
      color: 'Mid Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f',
      pt: 'Denim Co. Cargo Style Loose Fit Jeans',
      pp: '3499.00',
      pr: '4.3',
      pd: 'Modern cargo style loose fit jeans with multiple pockets',
      size: '30-38',
      color: 'Vintage Blue'
    },
    
    {
      pis: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab',
      pt: 'Denim Co. Bootcut Dark Wash Jeans',
      pp: '2899.00',
      pr: '4.4',
      pd: 'Classic bootcut jeans in premium dark wash',
      size: '30-38',
      color: 'Dark Indigo'
    },
    {
      pis: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec',
      pt: 'Denim Co. Acid Wash Boyfriend Jeans',
      pp: '3299.00',
      pr: '4.3',
      pd: 'Trendy acid wash boyfriend fit jeans',
      size: '28-36',
      color: 'Acid Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0',
      pt: 'Denim Co. High-Waisted Mom Jeans',
      pp: '2799.00',
      pr: '4.5',
      pd: 'Comfortable high-waisted mom fit jeans',
      size: '28-36',
      color: 'Classic Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb',
      pt: 'Denim Co. Distressed Baggy Jeans',
      pp: '3099.00',
      pr: '4.2',
      pd: 'Fashion-forward distressed baggy fit jeans',
      size: '30-38',
      color: 'Washed Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1604176354204-9268737828e4',
      pt: 'Denim Co. Cropped Straight Jeans',
      pp: '2599.00',
      pr: '4.3',
      pd: 'Trendy cropped straight fit jeans',
      size: '28-36',
      color: 'Mid Wash'
    },
    {
      pis: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
      pt: 'Denim Co. Patch Work Jeans',
      pp: '3599.00',
      pr: '4.4',
      pd: 'Unique patchwork design straight fit jeans',
      size: '30-38',
      color: 'Multi Blue'
    },
    {
      pis: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab',
      pt: 'Denim Co. Carpenter Style Jeans',
      pp: '3399.00',
      pr: '4.3',
      pd: 'Utility-inspired carpenter style jeans',
      size: '30-40',
      color: 'Light Indigo'
    },
    {
      pis: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0',
      pt: 'Denim Co. Vintage Wash Regular Fit',
      pp: '2899.00',
      pr: '4.4',
      pd: 'Classic regular fit jeans with vintage wash',
      size: '28-38',
      color: 'Vintage Indigo'
    },
    {
      pis: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
      pt: 'Denim Co. Raw Selvedge Jeans',
      pp: '4299.00',
      pr: '4.5',
      pd: 'Premium raw selvedge denim with classic fit',
      size: '30-38',
      color: 'Raw Indigo'
    }
];

products_sports_shoes = [
  {
    pis: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    pt: 'Nike Air Zoom Pegasus 38',
    pp: '8995.00',
    pr: '4.6',
    pd: 'Premium running shoe with responsive cushioning',
    size: 'UK 6-12',
    color: 'Black/White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1552346154-21d32810aba3',
    pt: 'Nike ZoomX Vaporfly NEXT% 2',
    pp: '20800.00',
    pr: '4.5',
    pd: 'Elite racing shoe with carbon fiber plate',
    size: 'UK 6-11',
    color: 'Bright Crimson'
  },
  {
    pis: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5',
    pt: 'Nike Air Force 1',
    pp: '8999.00',
    pr: '4.5',
    pd: 'Classic lifestyle sneaker with Air cushioning',
    size: 'UK 6-12',
    color: 'White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    pt: 'Nike Revolution 5',
    pp: '3688.00',
    pr: '4.0',
    pd: 'Lightweight running shoe for daily use',
    size: 'UK 6-12',
    color: 'Black/Anthracite'
  },

  {
    pis: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782',
    pt: 'Nike Air Max 270',
    pp: '12500.00',
    pr: '4.5',
    pd: 'Lifestyle shoe with large Air unit',
    size: 'UK 6-12',
    color: 'Black/Red'
  },
  {
    pis: 'https://images.unsplash.com/photo-1552346154-21d32810aba3',
    pt: 'Nike Blazer Mid 77',
    pp: '7995.00',
    pr: '4.5',
    pd: 'Vintage-inspired basketball shoe',
    size: 'UK 6-11',
    color: 'White/Black'
  },
  {
    pis: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    pt: 'Nike Renew Ride 3',
    pp: '7000.00',
    pr: '4.5',
    pd: 'Cushioned running shoe for beginners',
    size: 'UK 6-11',
    color: 'Grey/White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
    pt: 'Nike Air Max 2021',
    pp: '12000.00',
    pr: '4.5',
    pd: 'Modern lifestyle shoe with Air cushioning',
    size: 'UK 6-12',
    color: 'White/Volt'
  },
  {
    pis: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    pt: 'Nike SB Dunk Low',
    pp: '9695.00',
    pr: '4.4',
    pd: 'Skateboarding shoe with Zoom Air',
    size: 'UK 6-11',
    color: 'Black/White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
    pt: 'Nike Air Presto',
    pp: '10725.00',
    pr: '4.5',
    pd: 'Comfortable lifestyle shoe with stretchy fit',
    size: 'XS-XL',
    color: 'Triple Black'
  },
  {
    pis: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111',
    pt: 'Nike Free RN 5.0',
    pp: '6599.00',
    pr: '4.3',
    pd: 'Minimalist running shoe for natural movement',
    size: 'UK 6-12',
    color: 'Grey/White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329',
    pt: 'Nike Kyrie 7',
    pp: '11495.00',
    pr: '4.1',
    pd: 'Basketball shoe with Zoom Air Turbo',
    size: 'UK 6-12',
    color: 'Black/Gold'
  },
  {
    pis: 'https://images.unsplash.com/photo-1556906781-9a412961c28c',
    pt: 'Nike Metcon 7',
    pp: '7501.00',
    pr: '4.6',
    pd: 'Training shoe for CrossFit and weightlifting',
    size: 'UK 6-12',
    color: 'Black/White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    pt: 'Nike React Vision',
    pp: '10447.00',
    pr: '4.7',
    pd: 'Lifestyle shoe with React cushioning',
    size: 'UK 6-12',
    color: 'Platinum/White'
  },
  {
    pis: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    pt: 'Nike Zoom Fly 4',
    pp: '13995.00',
    pr: '4.4',
    pd: 'Performance running shoe with carbon plate',
    size: 'UK 6-12',
    color: 'Hyper Violet'
  }
];

  constructor(public router: Router) {}

  navigation() {
    this.router.navigate([`${this.NavigateTo}`]);
  }
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

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
