import { Component } from '@angular/core';
import { ProductAPIService } from '../../services/product-api.service';
import { TitleComponent } from '../../components/title/title.component';
import { FilterProductsComponent } from '../../components/filter-products/filter-products.component';

@Component({
  standalone: true,
  selector: 'filter-products-app',
  templateUrl: './filter-products.page.html',
  providers: [ProductAPIService],
  imports: [TitleComponent, FilterProductsComponent],
})
export class FilterProductsPage {}
