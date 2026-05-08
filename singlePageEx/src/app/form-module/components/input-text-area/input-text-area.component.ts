import { Component, Input, OnInit } from '@angular/core';
import { inputModel } from '../../FormModels/inputmodel.model';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent implements OnInit {
    @Input() form: any;
    @Input() inputModel!: inputModel;

  constructor() { }

  ngOnInit(): void {
  }

}
