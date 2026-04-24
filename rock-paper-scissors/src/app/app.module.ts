import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRpsComponent } from './form-rps/form-rps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PointsContainerComponent } from './points-container/points-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRpsComponent,
    PointsContainerComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
