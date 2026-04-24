import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input() name: string = ""
  // @Input() img: string = ""

  @Input() obj!: Icard;
  form: FormGroup = new FormGroup({
    nome: new FormControl(null),
    cognome: new FormControl(null),
  })

  constructor() { }
  ngOnInit(): void {
  }

  print(): void{
    console.log(this.form.value)
  }
}
export interface Icard{
  img: string
  name: string
  artist?:  string 
}

