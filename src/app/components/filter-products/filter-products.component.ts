import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../../services/product-api.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { FilterProductsPipe } from '../../pipes/filter-items.pipe';
import { LoadingComponent } from '../loading/loading.component';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import { GlobalErrorComponent } from '../global-error/global-error.component';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.scss',
  imports: [
    FormsModule,
    AsyncPipe,
    FilterProductsPipe,
    LoadingComponent,
    ProductsComponent,
    ProductComponent,
    GlobalErrorComponent,
  ],
})
export class FilterProductsComponent implements OnInit {
  title: string = '';

  constructor(public productAPIService: ProductAPIService) {}

  ngOnInit(): void {
    this.productAPIService.getProducts();
  }

  clear() {
    this.title = '';
  }
}
