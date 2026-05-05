import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsGameComponent } from './rps-game/rps-game.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MemoryComponent } from './memory/memory.component';
import { AuthGuard } from './auths/auth.guard';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auths/auth.interceptor';
import { InputsComponent } from './inputs/inputs.component';


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
