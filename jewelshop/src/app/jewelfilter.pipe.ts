import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jewelfilter'
})
export class JewelfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
