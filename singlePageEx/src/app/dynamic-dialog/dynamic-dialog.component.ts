import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicDialogAction, DynamicDialogData } from '../models/dynamicdialog.model';
@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.css']
})
export class DynamicDialogComponent implements OnInit {



  constructor(@Inject (MAT_DIALOG_DATA) public data : DynamicDialogData, private dialogRef: MatDialogRef<DynamicDialogComponent>)
   { }

  ngOnInit(): void {
  }

  onAction(action: DynamicDialogAction){
    this.dialogRef.close({
      action: action.value,
      payload: this.data.payload
    })
  }

  close(){
    this.dialogRef.close()
  }
}
