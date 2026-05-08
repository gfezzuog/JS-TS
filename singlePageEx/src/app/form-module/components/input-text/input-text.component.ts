import { Component, Input, OnInit } from '@angular/core';
import { inputModel } from '../../FormModels/inputmodel.model';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() form: any;
  @Input() inputModel!: inputModel;

  constructor() { }

  ngOnInit(): void {
  }

}
