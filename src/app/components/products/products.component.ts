import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductAPIService } from '../../services/product-api.service';
import { ShowMorePipe } from '../../pipes/show-more.pipe';
import { ProductComponent } from '../product/product.component';
import { LoadingComponent } from "../loading/loading.component";
import { GlobalErrorComponent } from "../global-error/global-error.component";
import { IProduct } from '../../models/product';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [AsyncPipe, ShowMorePipe, ProductComponent, LoadingComponent, GlobalErrorComponent]
})
export class ProductsComponent {
  @Input() products: IProduct[] = [];

  constructor(public productAPIService: ProductAPIService) {}

  showCount = 4;

  showMore() {
    this.showCount += 4;
  }
}
