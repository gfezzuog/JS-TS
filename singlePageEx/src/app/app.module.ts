import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RpsGameComponent } from './rps-game/rps-game.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MemoryComponent } from './memory/memory.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { TestDirective } from './directives/test.directive';
import { TestPipe } from './pipes/test.pipe';
import { ImgPipePipe } from './pipes/img-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auths/auth.interceptor';
import { InputsComponent } from './inputs/inputs.component';
import { CustomValidatorsDirective } from './directives/custom-validators.directive';
import { StringByObjectArrayPipe } from './pipes/string-by-object-array.pipe';
import { TvFormValidatorDirective } from './directives/tv-form-validator.directive';
import { FormModuleModule } from './form-module/form-module.module';
import { FilmShowForkComponent } from './film-show-fork/film-show-fork.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { SecondTabComponent } from './second-tab/second-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';
import { FilmDialogComponent } from './film-dialog/film-dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    RpsGameComponent,
    TvListComponent,
    TvShowDetailsComponent,
    MemoryComponent,
    ImgCardComponent,
    TestDirective,
    TestPipe,
    ImgPipePipe,
    LoginComponent,
    InputsComponent,
    CustomValidatorsDirective,
    StringByObjectArrayPipe,
    TvFormValidatorDirective,
    FilmShowForkComponent,
    DynamicTableComponent,
    FilmsDetailsComponent,
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent,
    FilmDialogComponent,
    DynamicDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormModuleModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
