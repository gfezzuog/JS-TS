import { Component, Input, OnInit } from '@angular/core';
import { inputModel } from '../../FormModels/inputmodel.model';
import { FormUtils } from '../../form-utils';


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  public formUtils = FormUtils
  @Input() form: any;
  @Input() inputModel!: inputModel;

  constructor() { }

  ngOnInit(): void {
  }


}
