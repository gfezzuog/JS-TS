import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { TvShow } from '../models/tvshow.model';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {
  
  tvShows: TvShow[]= new Array();
  page: number = 1;
  @Output() pippo = new EventEmitter<any>();


  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.loadTvShows()
    this.pippo.emit('')
  }

  loadTvShows(): void
  {
    this.tmdbService.getPopularTvShows(this.page).subscribe(
      (res) => {
        this.tvShows = res.results;
        console.log(this.tvShows)
      },
      (err) => {
        console.error("Error API", err);
      }
    );
  }
  nextPage():void
  {
    this.page++;
    this.loadTvShows();
  }

  previousPage():void
  {
    if(this.page > 1)
    {
      this.page--;
      this.loadTvShows();
    }
  }
  
}
