import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search-page',
  templateUrl: './product-search-page.component.html',
  styleUrl: './product-search-page.component.css'
})
export class ProductSearchPageComponent implements OnInit {
constructor(public router: Router){}
provider!: string
products: any[] = [{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Zybux 65W Charger with USB to Type C Cable Compatible with OnePlus, Nord, Realme, Oppo, Samsung, Nothing, Pixel, Redmi and More USB-C Devices | C Type | SuperVooc, Dash, Warp, Rapidly Charging, White',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},];
ngOnInit(): void {
  
}

productSearch(event:any){
  console.log(event.target?.value)
  console.log(this.provider)
}
getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warning';
      case 'OUTOFSTOCK':
          return 'danger';
      default:
        return '';
  }
}
}
