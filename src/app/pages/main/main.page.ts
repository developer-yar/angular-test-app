import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  standalone: true,
  selector: 'main-app',
  templateUrl: './main.page.html',
  imports: [TitleComponent, CreateProductComponent],
})
export class MainPage {}
