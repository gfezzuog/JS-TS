import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string): string {
    const date_splitted: string[]=  value.split('-')
    
    const finaldate = date_splitted.reverse().join('-') 
    return finaldate;
  }

}

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }