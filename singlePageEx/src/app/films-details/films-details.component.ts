import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActionTable, DisplayedColumn } from '../models/mattable.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { FilmDetails, FilmReview, Result } from '../models/filmfork.model';
import { forkJoin, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FilmDialogComponent, FormReviewFilm } from '../film-dialog/film-dialog.component';

export interface FilmReviewTableRow {
  filmTitle: string;
  original_language: string;
  author: string;
  content: string;
  rating: number | null;
  createdAt: string;
}

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css'],
})
export class FilmsDetailsComponent implements OnInit, OnDestroy {

  rows: FilmReviewTableRow[] = [];
  id: Number = Number(this.route.snapshot.paramMap.get('id'));
  filmDetails$?: Observable<any>;
  destroy$: Subject<any> = new Subject();
  reviewsArray!: FormArray;


  reviewActions: ActionTable<FilmReviewTableRow>[] = [
    {
      classes: 'fa-solid fa-magnifying-glass',
      onClick: (row, index) => {


        const dialogRef = this.dialog.open(FilmDialogComponent, {
          data: { review: row },
          width: '900px',
          height: '600px',
          panelClass: 'custom-dialog'
        });

        dialogRef.afterClosed().subscribe((updated) => {
          if (updated) {
            this.rows[index] = {
              ...this.rows[index],
              ...updated,
            };
            this.reviewDataSource.data = [...this.rows]; // aggiorna datasource
            // const formArray = this.formArray(); // aggiorna FormArray
            this.formArray().at(index).patchValue(updated);
          }
        });
      },
    },
    {
      classes: 'fa-solid fa-exclamation',
      onClick : () => {},
      onShow: ((row) => {
        const form = new FormReviewFilm()
        form.patchValue(row)
        return (form.invalid)
      })
    }
  ];

  reviewDataSource = new MatTableDataSource<FilmReviewTableRow>([]);

  reviewDisplayedColumns: DisplayedColumn<FilmReviewTableRow>[] = [
    { property: 'filmTitle', label: 'Titolo', content: (row) => row.filmTitle },
    {
      property: 'original_language',
      label: 'Lingua',
      content: (row) => row.original_language,
    },
    { property: 'author', label: 'Autore', content: (row) => row.author },
    { property: 'content', label: 'Review', content: (row) => row.content },
    {
      property: 'rating',
      label: 'Rating',
      content: (row) => row.rating ?? '-',
    },
    { property: 'createdAt', label: 'Data', content: (row) => row.createdAt },
    { property: 'azione', label: 'Azione', isAction: true, content: () => '' },
  ];
  // reviewActions: ActionTable<FilmReviewTableRow>[] = [];

  filmFormDetails = new FormGroup({
    original_title: new FormControl(),
    overview: new FormControl(),
    original_language: new FormControl(),
    filmFormReviews: new FormGroup({
      results: new FormArray([]),
    }),
  });

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    // Calcola l'ordine delle colonne direttamente dalla configurazione generica
    // this.rowDef = this.displayedColumns.map((column: DisplayedColumn<T>) => column.property)
    // this.filmDetails$ = this.tmdbService.getFilmDetails(
    //   Number(this.route.snapshot.paramMap.get('id')),
    // );
    // this.filmDetails$.pipe(
    //   takeUntil(this.destroy$),
    //   tap(val => console.log(val))
    // ).subscribe((res)=> this.filmFormDetails.patchValue(res));

    this.filmDetails$ = forkJoin({
      details: this.tmdbService.getFilmDetails(this.id),
      review: this.tmdbService.getFilmsReviews(this.id),
    }).pipe(takeUntil(this.destroy$));

    this.filmDetails$.subscribe((res) => {
      this.filmFormDetails.patchValue(res.details);
      this.rows = res.review.results.map((element: Result) => {
        const row: FilmReviewTableRow = {
          filmTitle: res.details.title || res.details.original_title,
          original_language: res.details.original_language,
          author: element.author,
          content: element.content,
          rating: element.author_details?.rating ?? null,
          createdAt: element.created_at,
        };
        const form = new ReviewForm();
        form.patchValue(element);
        (
          this.filmFormDetails
            .get('filmFormReviews')
            ?.get('results') as FormArray
        ).push(form);
        return row;
      });

      this.reviewDataSource.data = this.rows;
    });
    console.log(this.filmFormDetails.get('filmFormReviews'));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formArray(): FormArray {
    return this.filmFormDetails
      .get('filmFormReviews')!
      .get('results') as FormArray;
  }
}

export class ReviewForm extends FormGroup {
  constructor() {
    super({
      author: new FormControl(),
      content: new FormControl(),
    });
  }
}
