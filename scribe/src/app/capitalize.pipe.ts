import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let first=value.substring(0,1);
    let other=value.substring(1,value.length);
    let newWord=first.toUpperCase()+other.toLowerCase();
    return newWord;
  }

}
