import {
  ChangeDetectorRef,
  Component,
  effect,
  ElementRef,
  Injector,
  OnInit,
  runInInjectionContext,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { Quad } from 'gsap-trial';
import { GetProductsService } from 'src/app/Services/TanstackQueries/get-all-products.service';

@Component({
  selector: 'app-product-dual-view',
  templateUrl: './product-dual-view.component.html',
  styleUrl: './product-dual-view.component.css',
})
export class ProductDualViewComponent implements OnInit {
  @ViewChild('favoriteButton') favoriteButton!: ElementRef;
  layout: 'list' | 'grid' = 'list';
  FinalizedProducts!: any[];
  flag = 0;
  products: any[] = [];
  loading: boolean = true;
  cart__badge__view: boolean = true;
  favoriteIcons: { [key: string]: string } = {};

  draggedProduct: any[] | undefined | null;
  cart_value: string = '0';
  availableProducts: any[] | undefined;

  selectedProducts: any[] | undefined;

  constructor(
    private cd: ChangeDetectorRef,
    public router: Router,
    public getProduct: GetProductsService,
    private injector: Injector,
  ) {}

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      const query = injectQuery(() => this.getProduct.getAllProducts());
      effect(() => {
        if (query.isPending()) {
          console.log('Query is still loading...');
          this.flag = 0;
        } else if (query.isError()) {
          console.error('Query error:', query.error());
        } else if (query.isSuccess()) {
          this.products = query.data().details;
          this.flag = 1;
          this.loading = false;
          this.availableProducts = this.products;
          this.selectedProducts = [];
        }
      });
    });
  }
  getSeverity(product: any) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
  changefavourite(id: any) {
    if (!this.favoriteIcons[id]) {
      this.favoriteIcons[id] = 'pi pi-heart';
    }
    this.favoriteIcons[id] =
      this.favoriteIcons[id] === 'pi pi-heart'
        ? 'pi pi-heart-fill'
        : 'pi pi-heart';
    this.cd.detectChanges();
  }
  dragStart(product: any) {
    this.draggedProduct = product;
  }
  dragEnd() {
    this.draggedProduct = null;
  }
  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [
        ...(this.selectedProducts as any[]),
        this.draggedProduct,
      ];
      this.availableProducts = this.availableProducts?.filter(
        (val, i) => i != draggedProductIndex,
      );
      this.draggedProduct = null;
      this.cart__badge__view = false;
      this.cart_value = String(this.selectedProducts.length);
    }
    console.log(this.selectedProducts);
  }
  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
      if (
        product.ProductID === (this.availableProducts as any[])[i].ProductID
      ) {
        index = i;
        break;
      }
    }
    return index;
  }
}
