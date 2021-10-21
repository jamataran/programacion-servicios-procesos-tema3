import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reversed'
})
export class ReversedPipe implements PipeTransform {

  transform(str: string, ...args: unknown[]): string {
    return str.split("").reverse().join("");
  }

}
