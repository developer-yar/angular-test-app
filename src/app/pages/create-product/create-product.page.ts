import { Component } from '@angular/core';
import { ProductAPIService } from '../../services/product-api.service';
import { TitleComponent } from '../../components/title/title.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  standalone: true,
  selector: 'create-product-app',
  templateUrl: './create-product.page.html',
  providers: [ProductAPIService],
  imports: [TitleComponent, CreateProductComponent],
})
export class CreateProductPage {}