import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap, finalize } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { TmdbService } from '../services/tmdb.service';
import { FilmDetails, FilmForkItem, FilmForkTableRow, FilmReview } from '../models/filmfork.model';
import { ActionTable, DisplayedColumn } from '../models/mattable.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-film-show-fork',
  templateUrl: './film-show-fork.component.html',
  styleUrls: ['./film-show-fork.component.css'],
})

export class FilmShowForkComponent implements OnInit, OnDestroy {

  loading = true
  destroy$ : Subject<any> = new Subject()
  // Colonne definite in modo generico per il tipo FilmForkTableRow
  displayedColumns: DisplayedColumn<FilmForkTableRow>[] = [
    { property: 'position', label: 'No.', content: (row) => row.position },
    { property: 'original_title', label: 'Titolo', content: (row: FilmForkTableRow) => row.film.original_title },
    { property: 'test', label: 'Prova', content: () => 'Dovrebbe funzionare' },
    { property: 'azioni', label: 'Azioni', isAction: true, content: () => '' } // colonna speciale azione
  ];
  actions: ActionTable<FilmForkTableRow>[] = [
    // {classes: 'fa-solid fa-pen-to-square', onClick: (row) => {console.log(row)}},
    {classes: 'fa-solid fa-magnifying-glass', onClick: (row) => this.router.navigate(["FilmDetails",  row.details.id])}
    

  ]
  dataSource = new MatTableDataSource<FilmForkTableRow>([]); 
  forking$!: Observable<FilmForkItem[]>;

  constructor(private tmdbService: TmdbService, private router: Router) {}

  ngOnInit(): void {
    const stringa = 'pippo';

    stringa.toUpperCase().toLowerCase();

    this.forking$ = this.tmdbService.getFilmsPopular().pipe(
      switchMap((response: any) => {
        return this.loadFilmForkItems(response);
      }),
      tap((items: FilmForkItem[]) => {
        const tableRows = this.createTableRows(items);
        this.dataSource.data = tableRows;
      }),
      finalize(() => {
        this.loading = false
      }),
    );
    this.forking$.pipe(takeUntil(this.destroy$)).subscribe()
  }

  private loadFilmForkItems(response: any): Observable<FilmForkItem[]> {
    const films = response?.results ?? [];
    if (films.length === 0) {
      return of([] as FilmForkItem[]);
    }
    const requests: Observable<FilmForkItem>[] = films.map((film: any) => {
      return forkJoin({
        details: this.tmdbService.getFilmDetails(film.id),
        reviews: this.tmdbService.getFilmsReviews(film.id),
      }).pipe(
        map((payload) => {
          return this.buildFilmForkItem(film, payload);
        }),
      );
    });
    return forkJoin(requests);
  }

  private buildFilmForkItem(
    film: any,
    payload: { details: FilmDetails; reviews: FilmReview },
  ): FilmForkItem {
    return {
      film: film,
      details: payload.details,
      reviews: payload.reviews,
    };
  }

  private createTableRows(items: FilmForkItem[]): FilmForkTableRow[] {
    return items.map((item: FilmForkItem, index: number) => {
      return {
        ...item,
        position: index + 1,
      };
    });
  }

  formatGenres(genres: any[]): string {
    if (!genres) {
      return '';
    }
    return genres.map((genre) => genre.name).join(', ');
  }

  // showDetails(){
  //   return this.forking$.pipe()
  // }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
