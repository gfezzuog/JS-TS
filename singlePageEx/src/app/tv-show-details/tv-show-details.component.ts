import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { TvShow } from '../models/tvshow.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

  tvShow!: TvShow;
  loader: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      return;
    }

    const tvId = Number(idParam);
    
    // Chiamata API per il valore tvID passato
    this.tmdbService.getTvShowDetails(tvId).subscribe({
      next: (data) => {
        this.tvShow = data;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Errore API:', err.message);
      },
      complete: () => {
        // setTimeout(() => {
           this.loader = false
            console.log("PERFORZA")
        // }, 5000);
        // console.log("COMPLETE")
       
      }
    });
  }
}
``