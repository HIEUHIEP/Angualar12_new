import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log('my pipee ', value);
    if (value)
      return 'Đang hạ giá';
    return '';
  }

}
