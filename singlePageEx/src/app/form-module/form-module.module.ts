import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { TvFormsComponent } from './components/tv-forms/tv-forms.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';
import { InputCheckBoxComponent } from './components/input-check-box/input-check-box.component';
import { LabelsForEveryoneComponent } from './components/labels-for-everyone/labels-for-everyone.component';
import { ErrorLabelPipe } from './pipes/error-label.pipe';
import { InputDateComponent } from './components/input-date/input-date.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputSelectComponent,
    TvFormsComponent,
    InputTextAreaComponent,
    InputCheckBoxComponent,
    LabelsForEveryoneComponent,
    ErrorLabelPipe,
    InputDateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class FormModuleModule { }
