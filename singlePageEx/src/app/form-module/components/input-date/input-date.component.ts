import { Component, Input, OnInit } from '@angular/core';
import { inputDate } from '../../FormModels/inputdate.model';
import { FormUtils } from '../../form-utils';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
 
  @Input() form: any;
  @Input() inputDate?: inputDate;

  constructor() {}

  ngOnInit(): void {
  }

}
