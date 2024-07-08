import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMorePipe',
  standalone: true,
})
export class ShowMorePipe implements PipeTransform {
  transform = (array: Array<any>, count: number): Array<any> =>
    array.slice(0, count);
}
