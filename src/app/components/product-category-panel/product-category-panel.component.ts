import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category-panel',
  templateUrl: './product-category-panel.component.html',
  styleUrl: './product-category-panel.component.css'
})
export class ProductCategoryPanelComponent  implements OnInit{

  @Input() product__category!: any
  @Input() category!: any
constructor(public router: Router){
  let t:string = localStorage.getItem('Products')!
  JSON.parse(t)
  console.log(JSON.parse(t))
}
  ngOnInit(): void {
    let t:string = localStorage.getItem('Products')!
    JSON.parse(t)
    console.log(JSON.parse(t))
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
}
