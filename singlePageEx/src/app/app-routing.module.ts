import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsGameComponent } from './rps-game/rps-game.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MemoryComponent } from './memory/memory.component';


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
  },
  {
    path: 'memory',
    component:MemoryComponent
  },
  {
    path: '',
    component: RpsGameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
