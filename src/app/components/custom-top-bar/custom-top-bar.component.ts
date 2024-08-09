import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-custom-top-bar',
  templateUrl: './custom-top-bar.component.html',
  styleUrls: ['./custom-top-bar.component.css']
})
export class CustomTopBarComponent implements OnInit {
  @Input() Heading!: string;
  @Input() Triggering!: boolean;
  @Input() NavigateTo!: string;
  @Input() NavButtonText!: string

  constructor(private router: Router) {} 

  navigation() {
      this.router.navigate([`${this.NavigateTo}`])
    }

    items!: MenuItem[];

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-home' ,routerLink: "/home"},
            { label: 'Products', icon: 'pi pi-list', routerLink:"/products"},
            { label: 'Cart', icon: 'pi pi-shopping-cart', routerLink:"/cart"},
            { label: 'About Us', icon: 'pi pi-address-book', routerLink:"/about-us"},

        ];

        this.activeItem = this.items[0];
    }

    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }
  
}