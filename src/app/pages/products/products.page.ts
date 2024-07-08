import { Component } from '@angular/core';
import { ProductAPIService } from '../../services/product-api.service';
import { TitleComponent } from '../../components/title/title.component';
import { ProductsWrapperComponent } from '../../components/products-wrapper/products-wrapper.component';

@Component({
  selector: 'products-app',
  standalone: true,
  templateUrl: './products.page.html',
  providers: [ProductAPIService],
  imports: [TitleComponent, ProductsWrapperComponent],
})
export class ProductsPage {}
