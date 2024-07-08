import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import { GlobalErrorComponent } from '../global-error/global-error.component';
import { ProductAPIService } from '../../services/product-api.service';
import { ShowMorePipe } from '../../pipes/show-more.pipe';

@Component({
  selector: 'app-products-wrapper',
  standalone: true,
  templateUrl: './products-wrapper.component.html',
  imports: [
    AsyncPipe,
    CommonModule,
    LoadingComponent,
    ProductsComponent,
    ProductComponent,
    GlobalErrorComponent,
    ShowMorePipe,
  ],
})
export class ProductsWrapperComponent implements OnInit {
  constructor(public productAPIService: ProductAPIService) {}

  ngOnInit(): void {
    this.productAPIService.getProducts();
  }
}
