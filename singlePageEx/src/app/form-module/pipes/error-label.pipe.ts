import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'errorLabel',
})
export class ErrorLabelPipe implements PipeTransform {
  transform(value: any, control: FormControl): string {
    // console.log('pippo per forza');
    if (control.invalid && !value) {
      return '*';
    } else if (control.invalid) {
      return '!';
    }
    return '';
  }
}
