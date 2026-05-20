import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsGameComponent } from './rps-game/rps-game.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MemoryComponent } from './memory/memory.component';
import { AuthGuard } from './auths/auth.guard';
import { LoginComponent } from './login/login.component';
import { InputsComponent } from './inputs/inputs.component';
import { TvFormsComponent } from './form-module/components/tv-forms/tv-forms.component';
import { UNILAVComponent } from './form-module/components/unilav/unilav.component';
import { FilmShowForkComponent } from './film-show-fork/film-show-fork.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';


// providers: [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthInterceptor,
//     multi: true
//   }
// ]


const routes: Routes = [
  {
    path: 'RockPaperScissors',
    component: RpsGameComponent,
  },
  {
    path:'TvShows',
    component: TvListComponent,
  },
  {
    path: 'tv/:id',
    component:TvShowDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'memory',
    component:MemoryComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'tv-forms/:id',
    component: TvFormsComponent
  },
  {
    path: 'UNILAV',
    component: UNILAVComponent
  },
  {
    path: 'Films',
    component: FilmShowForkComponent
  },
  {
    path: 'FilmDetails/:id',
    component: FilmsDetailsComponent
  },
  {
    path: '**',
    // component: RpsGameComponent,
    redirectTo: 'RockPaperScissors',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
