import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Component,Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, LowerCasePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product: IProduct;
  isDetailed: boolean = false;

  toggle = (): void => {
    this.isDetailed = !this.isDetailed;
  };
}
