import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductsManipulateService {

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  // Method to update products
  updateProducts(products: any[]) {
    this.productsSubject.next(products);
  }

  // Method to get current value
  getCurrentProducts(): any[] {
    return this.productsSubject.getValue();
  }
}
