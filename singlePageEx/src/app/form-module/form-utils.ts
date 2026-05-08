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
}