import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenIncrement'
})
export class TokenIncrementPipe implements PipeTransform {

  transform(value: string): number {
    let data = value ? value : '0';
    let mul = parseInt(data);
    mul++;
    return mul;
  }

}
