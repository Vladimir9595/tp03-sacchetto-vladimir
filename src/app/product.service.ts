import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = './assets/products.json';
  products: Product[] = [];
  filteredProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts.next(data); // Initialement, les produits filtrés sont les produits non filtrés
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
