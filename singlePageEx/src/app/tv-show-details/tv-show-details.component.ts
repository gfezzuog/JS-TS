import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { TvShow } from '../models/tvshow.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

  tvShow!: any;
  loader: boolean = true;
  osservabile$!: Observable<any>;

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
    this.osservabile$ = this.tmdbService.getTvShowCredits(tvId)
    // Chiamata API per il valore tvID passato
    this.tmdbService.getTvShowDetails(tvId).subscribe({
      next: (data) => {
        this.tvShow = data;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Errore API:', err.message);
      },
      complete: () => {
           this.loader = false
            console.log("PERFORZA")
      }
    });
  }
}
//  setTimeout(() => {
          //  this.loader = false
            // console.log("PERFORZA")
        // }, 5000);
        // console.log("COMPLETE")