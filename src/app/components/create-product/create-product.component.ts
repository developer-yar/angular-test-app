import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/product';
import { ProductAPIService } from '../../services/product-api.service';
import { LoadingComponent } from '../loading/loading.component';
import { AsyncPipe } from '@angular/common';
import { GlobalErrorComponent } from '../global-error/global-error.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  standalone: true,
  selector: 'app-create-product',
  styleUrl: './create-product.component.scss',
  templateUrl: './create-product.component.html',
  providers: [ProductAPIService],
  imports: [FormsModule, AsyncPipe, LoadingComponent, GlobalErrorComponent, ErrorComponent],
})
export class CreateProductComponent implements OnInit {
  product: IProduct = {
    title: '',
    price: 0,
    description: '',
    category: '',
  };

  constructor(public productAPIService: ProductAPIService) {}

  ngOnInit(): void {
    this.productAPIService.getCategories();
  }

  addProduct(product: IProduct): void {
    this.productAPIService.addProduct(product);
  }
}
