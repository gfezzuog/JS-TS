import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { TvShow } from '../models/tvshow.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit, OnDestroy {

  tvShow!: any;
  loader: boolean = true;
  osservabile$!: Observable<any>;
  destroy$: Subject<any> = new Subject()

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
    this.tmdbService.getTvShowDetails(tvId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
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

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
