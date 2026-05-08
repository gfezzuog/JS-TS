import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringByObjectArray',
})
export class StringByObjectArrayPipe implements PipeTransform {
  transform(value: any[], key: string): string {
    if (value) {
      return value.map((el) => el[key]).join(', ');
    }
    return ''
  }
}
