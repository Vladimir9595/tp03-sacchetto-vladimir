import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    productService.filteredProducts.subscribe((data) => {
      this.filteredProducts = data;
    });
  }

  ngOnInit(): void {}
}
