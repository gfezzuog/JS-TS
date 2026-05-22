import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.css']
})
export class SecondTabComponent implements OnInit {

  controlsArray?: FormArray
  @Input() form?: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.controlsArray = (this.form?.get('filmFormReviews')?.get('results')) as FormArray
  }

}
