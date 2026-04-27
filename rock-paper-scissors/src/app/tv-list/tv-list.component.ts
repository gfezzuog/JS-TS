import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {
  
  tvShows: any[]= [];
  page: number = 1;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.loadTvShows()
  }

  loadTvShows(): void
  {
    this.tmdbService.getPopularTvShows(this.page).subscribe(
      (res) => {
        this.tvShows = res.results;
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
