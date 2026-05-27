import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActionTable, DisplayedColumn } from '../models/mattable.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { FilmDetails, FilmReview, Result } from '../models/filmfork.model';
import { forkJoin, Observable, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import {
  FilmDialogComponent,
  FormReviewFilm,
} from '../film-dialog/film-dialog.component';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';
import { error } from '@angular/compiler/src/util';

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
  rowsArray: FilmReviewTableRow[] = [];
  id: Number = Number(this.route.snapshot.paramMap.get('id'));
  filmDetails$?: Observable<any>;
  destroy$: Subject<any> = new Subject();
  reviewsArray!: FormArray;
  // tableForm!: FormGroup
  formInvalid: boolean = false;

  reviewActions: ActionTable<FilmReviewTableRow>[] = [
    {
      classes: 'fa-solid fa-magnifying-glass',
      onClick: (row, index) => {
        const dialogRef = this.dialog.open(DynamicDialogComponent, {
          width: '900px',
          height: '600px',
          panelClass: 'custom-dialog',
          data: {
            type: 'form', // 🔥 importante per distinguere layout
            title: 'Modifica Recensione',
            payload: {
              row,
              index,
            },
          },
        });

        dialogRef.afterClosed().pipe(
          takeUntil(this.destroy$)
        ).subscribe((res) => {
          if (!res || res.action !== 'save') return;

          this.rowsArray[index] = {
            ...res.payload,
          };

          this.reviewDataSource.data = [...this.rowsArray];
          this.formArray().at(index).patchValue(res.payload);
        });
      },
    },
    {
      classes: 'fa-solid fa-exclamation',
      onClick: () => {},
      onShow: (row) => {
        const form = new FormReviewFilm();
        form.patchValue(row);
        return form.invalid;
      },
    },
    {
      classes: 'fa-solid fa-eraser',

      onClick: (row, index) => {
        const dialogRef = this.dialog.open(DynamicDialogComponent, {
          width: '900px',
          height: '600px',
          data: {
            title: 'Conferma eliminazione',
            message: `Vuoi eliminare la review di ${row.author}?`,
            payload: { row, index },
            actions: [
              {
                label: 'Annulla',
                class: 'btn-secondary',
                value: 'cancel',
              },
              {
                label: 'Elimina',
                class: 'btn-danger',
                value: 'confirm',
              },
            ],
          },
        });

        dialogRef.afterClosed().pipe(
          filter((res)=> res.action == 'confirm'),
          takeUntil(this.destroy$)
        ).subscribe((res) => {
          console.log(res)
          this.rowsArray.splice(index, 1); //Rimuove dalla tabella
          this.reviewDataSource.data = [...this.rowsArray];
          this.formArray().removeAt(index); //Rimuove dal secondo tab
        }), 
        (error: any) => console.log(error);
        ()=> console.log("Una qualsiasi cosa")  
      },
    },
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
    this.filmDetails$ = forkJoin({
      details: this.tmdbService.getFilmDetails(this.id),
      review: this.tmdbService.getFilmsReviews(this.id),
    }).pipe(takeUntil(this.destroy$));

    this.filmDetails$.subscribe((res) => {
      this.filmFormDetails.patchValue(res.details);
      this.rowsArray = res.review.results.map((element: Result) => {
        const row: FilmReviewTableRow = {
          filmTitle: res.details.title || res.details.original_title,
          original_language: res.details.original_language,
          author: element.author,
          content: element.content,
          rating: element.author_details?.rating ?? null,
          createdAt: element.created_at,
        };
        const form = new FormReviewFilm();
        form.patchValue(element);
        (
          this.filmFormDetails
            .get('filmFormReviews')
            ?.get('results') as FormArray
        ).push(form);
        return row;
      });

      this.reviewDataSource.data = this.rowsArray;
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

// Calcola l'ordine delle colonne direttamente dalla configurazione generica
// this.rowDef = this.displayedColumns.map((column: DisplayedColumn<T>) => column.property)
// this.filmDetails$ = this.tmdbService.getFilmDetails(
//   Number(this.route.snapshot.paramMap.get('id')),
// );
// this.filmDetails$.pipe(
//   takeUntil(this.destroy$),
//   tap(val => console.log(val))
// ).subscribe((res)=> this.filmFormDetails.patchValue(res));
