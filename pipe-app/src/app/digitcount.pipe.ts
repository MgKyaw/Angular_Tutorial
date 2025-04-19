import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitcount'
})
export class DigitcountPipe implements PipeTransform {

  transform(val : unknown, ...args: unknown[]): unknown {
    if (val === null || val === undefined) {
      return 0;
    }

    return val.toString().length;
  }

}
