import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRpsComponent } from './form-rps/form-rps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PointsContainerComponent } from './points-container/points-container.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { RoutingTestComponent } from './routing-test/routing-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRpsComponent,
    PointsContainerComponent,
    TvListComponent,
    RoutingTestComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
