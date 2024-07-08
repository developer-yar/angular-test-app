import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts',
  standalone: true,
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], title: string): IProduct[] {
    return products.filter((product: IProduct) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );
  }
}
