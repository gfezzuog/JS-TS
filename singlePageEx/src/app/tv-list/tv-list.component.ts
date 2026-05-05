import { Component, OnInit, Inject } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { TvShow } from '../models/tvshow.model';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {
  
  tvShows: TvShow[]= new Array();
  page: number = 1;
  // @Output() pippo = new EventEmitter<any>();

  // date_map = new Map([
  //   ["en", "yyyy-mm-dd"],
  //   ["it", "dd-mm-yyyy"],
  // ])

  constructor(private tmdbService: TmdbService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.loadTvShows()
    // this.pippo.emit('')
  }

  loadTvShows(): void
  {
    this.tmdbService.getPopularTvShows(this.page).subscribe(
      (res) => {
        this.tvShows = res.results;
        // console.log(res.results)
        console.log(this.tvShows)
        // this.tvShows.forEach((element)=> {
        // element.first_air_date = this.selected(element.first_air_date)
        // console.log(element)
        // console.log(element.first_air_date)
      },
      (err) => {
        console.error("Error API", err);
        console.log(environment.tmdbToken)
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
  selected(data: string): string
  {
    // const year: string = date_splitted[0]
    // const month: string = date_splitted[1]
    // const days: string = date_splitted[2]
    const date_splitted: string[]=  data.split('-')
    
    const finaldate = date_splitted.reverse().join('-') 

    // showed_date = this.date_map.get(this.document.documentElement.lang)!

    // console.log(showed_date)
    // Date(data).toLocaleDateString('en-EN')
    console.log(finaldate)
    return (finaldate)
  }
}
