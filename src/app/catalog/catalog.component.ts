import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // Fonction de filtrage des produits en fonction des critères de recherche
  filterProducts(searchParams: any) {
    this.filteredProducts = this.products.filter((product) => {
      let matches = true;

      if (searchParams.name) {
        matches =
          matches &&
          product.name.toLowerCase().includes(searchParams.name.toLowerCase());
      }

      if (searchParams.category) {
        matches =
          matches &&
          product.category.toLowerCase() ===
            searchParams.category.toLowerCase();
      }

      if (searchParams.price) {
        matches = matches && product.price <= searchParams.price;
      }

      return matches;
    });
  }
}
