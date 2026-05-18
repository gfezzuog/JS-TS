import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TmdbService } from '../services/tmdb.service';
import { FilmDetails, FilmReview } from '../models/filmfork.model';

interface FilmForkItem {
  film: any;
  details: FilmDetails;
  reviews: FilmReview;
}

@Component({
  selector: 'app-film-show-fork',
  templateUrl: './film-show-fork.component.html',
  styleUrls: ['./film-show-fork.component.css']
})
export class FilmShowForkComponent implements OnInit {

  forking$!: Observable<FilmForkItem[]>;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.forking$ = this.tmdbService.getFilmsPopular().pipe(
      switchMap((res: any) => {
        const films = res?.results;
        if (!films.length) {
          return ([]);
        }

        const requests: Observable<FilmForkItem>[] = films.map((film: any) =>
          forkJoin({
            details: this.tmdbService.getFilmDetails(film.id),
            reviews: this.tmdbService.getFilmsReviews(film.id),
          }).pipe(
            map((payload) => ({
              film,
              details: payload.details,
              reviews: payload.reviews,
            }))
          )
        );

        return forkJoin(requests);
      }),
    );
  }

  formatGenres(genres: any[]): string {
    if (!genres) {
      return '';
    }
    return genres.map(g => g.name).join(', ');
  }

}
