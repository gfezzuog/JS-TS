import { Component, Input, OnInit } from '@angular/core';
import { inputModel } from '../../FormModels/inputmodel.model';

@Component({
  selector: 'app-labels-for-everyone',
  templateUrl: './labels-for-everyone.component.html',
  styleUrls: ['./labels-for-everyone.component.css']
})
export class LabelsForEveryoneComponent implements OnInit {

  @Input() inputModel!: inputModel
  @Input() form: any
  constructor() { }

  ngOnInit(): void {
  }

}
