import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayedColumn } from '../models/mattable.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { FilmDetails } from '../models/filmfork.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css'],
})
export class FilmsDetailsComponent<T> implements OnInit, OnDestroy {
  filmDetails$?: Observable<any>;
  destroy$: Subject<any> = new Subject();

  filmForm = new FormGroup({
    original_title: new FormControl(),    
    overview: new FormControl(),
    original_language: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
  ) {}

  ngOnInit(): void {
    // Calcola l'ordine delle colonne direttamente dalla configurazione generica
    // this.rowDef = this.displayedColumns.map((column: DisplayedColumn<T>) => column.property)
    this.filmDetails$ = this.tmdbService.getFilmDetails(
      Number(this.route.snapshot.paramMap.get('id')),
    );
    this.filmDetails$.pipe(
      takeUntil(this.destroy$),
      tap(val => console.log(val))
    ).subscribe((res)=> this.filmForm.patchValue(res));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
