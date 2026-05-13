import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unilav',
  templateUrl: './unilav.component.html',
  styleUrls: ['./unilav.component.css'],
})
export class UNILAVComponent implements OnInit {
  unilavForm = new FormGroup({
    cognome: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    cf: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^[A-Z]{6}[0-9]{2}[A-EHLMPRST][0-9]{2}[A-Z][0-9]{3}[A-Z]$',
      ),
    ]),
    sesso: new FormControl(null, Validators.required),
    dataNascita: new FormControl(null, Validators.required),
    comuneNascita: new FormControl(null, Validators.required),
    cittadinanza: new FormControl(null, Validators.required),
    istruzione: new FormControl(null),
    comuneDomicilio: new FormControl(null, Validators.required),
    cap: new FormControl(null, Validators.required),
    indirizzoDomicilio: new FormControl(null, Validators.required),
    nTitSogg: new FormControl(null),
    titoloSogg: new FormControl(null),
    scadenzaTitSogg: new FormControl(null, Validators.required),
    motivoTitSogg: new FormControl(null),
    questuraTitSogg: new FormControl(null),
    sussistenzaAlloggio: new FormControl(null),
    speseRimpatrioDatLav: new FormControl(null),
  });
  europe: boolean = true;
  /* ---------------------------------------------------------------- */
  constructor() {}

  ngOnInit(): void {
    this.unilavForm.valueChanges.subscribe(()=> console.log('pippo'))
    this.unilavForm.get('cittadinanza')?.valueChanges.subscribe((obj) => {
      const isEu = obj?.region === 'eu';
      this.europe = isEu;
      this.setTitoliDiSoggiornoValidators(!isEu);
      if(obj.name === 'Belgio')
        this.unilavForm.addControl('francesi', new BegliumForm())
      else
        // this.unilavForm.get('francesi')?.disable()
        this.unilavForm.removeControl('francesi')
    });
  }
  /* ---------------------------------------------------------------- */

  private setTitoliDiSoggiornoValidators(notregionEu: boolean): void {
    const controls = [
      'titoloSogg',
      'scadenzaTitSogg',
      'motivoTitSogg',
      'questuraTitSogg',
    ];

    controls.forEach((name) => {
      const control = this.unilavForm.get(name);
      if (!control) {
        return;
      }

      if (notregionEu) {
        // control.setValidators(Validators.required);
        control.enable()
      } else {
        control.patchValue(null)
        control.disable()

      }
      control.updateValueAndValidity({ onlySelf: true });
    });
  }

  comparison(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.name === obj2.name : obj1 === obj2;
  }

  print(): void{
    console.log(this.unilavForm.getRawValue())
  }
}

/* 

*/

export class BegliumForm extends FormGroup{
  constructor(){
    super({
      baguette: new FormControl(null, Validators.required)
    })
  }
}