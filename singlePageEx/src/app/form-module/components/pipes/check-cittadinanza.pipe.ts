import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkCittadinanza'
})
export class CheckCittadinanzaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
