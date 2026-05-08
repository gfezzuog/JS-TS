import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[CustomValidators]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorsDirective,
      multi: true,
    },
  ],
})
export class CustomValidatorsDirective extends Validators {

  static trim(control: AbstractControl): ValidationErrors | null{

    const value: string = control.value
     
    if( !value || value.length === value.trim().length ){
      return null
    }
    return ({'trim': true})
  }
}
