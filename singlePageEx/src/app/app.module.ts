import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TmdbService } from './services/tmdb.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RpsGameComponent } from './rps-game/rps-game.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MemoryComponent } from './memory/memory.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { TestDirective } from './directives/test.directive';

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
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }