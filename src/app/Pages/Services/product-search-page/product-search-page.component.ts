import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TableRowSelectEvent } from 'primeng/table';

@Component({
  selector: 'app-product-search-page',
  templateUrl: './product-search-page.component.html',
  styleUrl: './product-search-page.component.css',
})
export class ProductSearchPageComponent implements OnInit {
  constructor(
    public router: Router,
    private messageService: MessageService,
  ) {}
  provider!: string;
  loading!: boolean;
  productsselect: any[] = [1, 1, 1, 1, 1, 1];
  products: any[] = [];
  ngOnInit(): void {}

  exampl(event: TableRowSelectEvent) {}

  productSearch(event: KeyboardEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Accepted',
      detail: `You enteries = ${event.AT_TARGET.toString()}`,
    });
  }
}
