import { Component, Input, OnInit } from '@angular/core';
import { inputModel } from '../../FormModels/inputmodel.model';

@Component({
  selector: 'app-input-check-box',
  templateUrl: './input-check-box.component.html',
  styleUrls: ['./input-check-box.component.css']
})
export class InputCheckBoxComponent implements OnInit {

  @Input() form: any;
  @Input() inputModel!: inputModel;

  constructor() { }

  ngOnInit(): void {
  }

}
