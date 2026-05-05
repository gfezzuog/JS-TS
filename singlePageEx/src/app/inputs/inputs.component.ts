import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsDirective } from '../custom-validators.directive';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {


  movie = new FormGroup({
    name: new FormControl(null, [Validators.required, CustomValidatorsDirective.trim]),
    adult: new FormControl(null, Validators.required),
    original_name: new FormControl(null, Validators.required),
    popularity: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor() {}


  ngOnInit(): void {
    this.movie.get('adult')?.valueChanges.subscribe(
      (val) => {
        if(val){
          this.movie.get('popularity')!.enable()
          // this.movie.get('original_name')!.addValidators([CustomValidatorsDirective.trim])
          // this.movie.get('original_name')!.validator TUTTI
          this.movie.get('original_name')!.updateValueAndValidity()
        }
        else{
          this.movie.get('popularity')!.disable()
          this.movie.get('popularity')!.reset()
          this.movie.get('original_name')!.setErrors({adult: true})
          // this.movie.get('original_name')!.setErrors(null)
        }
      }
    )
  }

  print(): void {
    console.log(this.movie.value);
    console.log(this.movie.getRawValue());
  }
}
          // this.movie.get('popularity')!.setValue('')
          // this.movie.get('popularity')!.patchValue('')
