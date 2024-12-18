import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { GetAllProductsService } from 'src/app/Services/Products/get-all-products.service';
import { GetProductCateogriesService } from 'src/app/Services/Products/get-product-cateogries.service';
import { ProductsManipulateService } from 'src/app/Services/Products/products-manipulate.service';

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

  public categories!: any;
  skeletonItems = Array(5).fill({}); // Adjust the number as needed

  FinalizedProducts: any[] = [];
  flag = 0;

  products: Array<
    [
      {
        CategoryID: Number;
        Description: String;
        ImageRef: String;
        Price: Number;
        ProductID: Number;
        ProductName: String;
        Reviews: String;
        StarCount: Number;
      },
    ]
  > = [];

  constructor(
    public router: Router,
    public getAllProduct: GetAllProductsService,
    public getProductCat: GetProductCateogriesService,
    public malproduct: ProductsManipulateService,
  ) {}

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
    this.malproduct.products$.subscribe((products) => {
      this.products = products;
    });
    this.getProductCat.getProductCategories((response) => {
      this.categories = response['details'];
      // console.log(this.categories.at(1))
      this.getAllProduct.getAllProducts((response) => {
        console.log(response['details']);
        this.products = response['details'];
        this.FinalizedProducts = this.productCategoryMapping(
          this.categories,
          this.products,
        );
        setTimeout(() => {
          this.FinalizedProducts = Object.values(this.FinalizedProducts);
        }, 1000);
        setTimeout(() => {
          this.flag = 1;
        }, 5000);
      });
    });
  }

  productCategoryMapping(categories = [], products: any = []) {
    let t: any[] = [];
    categories.forEach((element) => {
      products.forEach((ele: any) => {
        if (element['CategoryID'] == ele['CategoryID']) {
          t[element['CategoryName']] = t[element['CategoryName']] || [];
          t[element['CategoryName']].push(ele);

          // localStorage.setItem('products',JSON.stringify(this.FinalizedProducts))
        }
      });
    });
    // console.log(this.FinalizedProducts)
    return t;
    // this.malproduct.updateProducts(this.FinalizedProducts);
    // console.log(this.malproduct.getCurrentProducts())
    // localStorage.setItem('products',JSON.stringify(this.malproduct.getCurrentProducts()))
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
