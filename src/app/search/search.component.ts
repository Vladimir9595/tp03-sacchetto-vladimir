import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchParams: any = {
    name: '',
    price: 0,
    category: '',
  };

  constructor(private productService: ProductService) {}

  searchProducts() {
    this.productService.getProducts().subscribe((data) => {
      // Filtrer les produits en fonction des critères de recherche
      this.productService.filteredProducts.next(this.filterProducts(data));
    });
  }

  filterProducts(products: Product[]): Product[] {
    return products.filter((product) => {
      return (
        (product.name
          .toLowerCase()
          .includes(this.searchParams.name.toLowerCase()) ||
          this.searchParams.name === '') &&
        (product.category
          .toLowerCase()
          .includes(this.searchParams.category.toLowerCase()) ||
          this.searchParams.category === '') &&
        (product.price <= this.searchParams.price ||
          this.searchParams.price === 0)
      );
    });
  }
}
