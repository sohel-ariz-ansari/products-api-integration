import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-component',
  imports: [CommonModule],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productsService.getData().subscribe({
      next: (response: any) => {
        this.products = response.products;
        console.log(response.products);
      },
      error: (err: any) => {
        console.log('Error while loading data', err);
      },
    });
  }
}
