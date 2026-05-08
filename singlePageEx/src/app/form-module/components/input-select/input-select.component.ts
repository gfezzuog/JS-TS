import { Component, Input, OnInit } from '@angular/core';
import { inputModel } from '../../FormModels/inputmodel.model';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  @Input() form: any;
  @Input() inputModel!: inputModel;
  @Input() options!: any[];
  @Input() compareWith!: (o1: any, o2: any) => boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
