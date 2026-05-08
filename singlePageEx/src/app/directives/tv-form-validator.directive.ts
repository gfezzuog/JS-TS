import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appTvFormValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TvFormValidatorDirective,
      multi: true,
    },
  ],
})
export class TvFormValidatorDirective {
  validate(control: AbstractControl): ValidationErrors | null {
    return TvFormValidatorDirective.checkDate(control);
  }

  static checkDate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const today: Date = new Date('2026-01-01');
    const tvDate: Date = new Date(control.value);
    if (today < tvDate) {
      return { invalidDate: true };
    }
    return null;
  }

  constructor() {}
}
