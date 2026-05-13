import { FormControl } from "@angular/forms";

export class FormUtils{
    static errorLabel(control: FormControl): string{
        
        console.log('pippo per forza')
        if(control.invalid && !control.value) {
            return '*'
        }
        else if(control.invalid){
            return '!'
        }
        return ''  
    }

    static getMinDate():string {
    return '2000-01-01';
  }

  static getMaxDate(): string{
    return '2030-01-01';
  }
}