import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { TvShow } from '../models/tvshow.model';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, merge, of, Subject } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
  tap,
  takeUntil,
} from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css'],
})
export class TvListComponent implements OnInit, AfterViewInit, OnDestroy {
  tvShows: TvShow[] = new Array();
  page: number = 1;
  searchQuery: string = '';
  searchMode: boolean = false;
  page$: BehaviorSubject<number> = new BehaviorSubject(1);
  // @ViewChild('searchTvShows') searchInput?: ElementRef<HTMLInputElement>;
  destroy$: Subject<any> = new Subject() 

  form: FormGroup = new FormGroup({
    control: new FormControl(null, [Validators.minLength(3)]),
  });
  /* ----------------------------------- */

  constructor(
    private tmdbService: TmdbService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.form.get('control')?.updateValueAndValidity()
    // this.pippo.emit('')
    // this.page$.next(this.page)
  }

  ngAfterViewInit(): void {
    // fromEvent<Event>(this.searchInput.nativeElement, 'keyup')
    const control = this.form.get('control')!;
    merge(
      this.page$, 
      control!.valueChanges.pipe(
        tap(()=> {
          this.page = 1
          this.page$.next(this.page)
        })
      )
    ).pipe(
        takeUntil(this.destroy$),
        map(() => ({ query: control.value, page: this.page })),
        // distinctUntilChanged(),
        debounceTime(300),
        filter((value) => !!control?.valid || (!value.page && !value.query)),
        switchMap((value) => {
          this.tmdbService.logDebug(value.query, '#993636');
          return this.tmdbService.searchTvShows(value.query, this.page);
        }),
      )
      .subscribe(
        (res) => {
          if (res && res.results) {
            this.tvShows = res.results;
            res.results.forEach((serie) =>
              this.tmdbService.logDebug(serie.name, '#993636'),
            );
          }
        },
        (err) => {
          console.error('Error search TV shows', err);
        },
      );
    // control?.updateValueAndValidity();
  }

  clearSearch(): void {
    // this.searchQuery = '';
    // this.searchMode = false;
    // this.page = 1;
    // // if (this.searchInput?.nativeElement) {
    // //   this.searchInput.nativeElement.value = '';
    // // }
    // this.loadTvShows();
  }
  /* ----------------------------------- */

  // loadTvShows(): void {
  //   this.tmdbService.getPopularTvShows(this.page).subscribe(
  //     (res) => {
  //       this.tvShows = res.results;
  //       console.log(this.tvShows);
  //     },
  //     (err) => {
  //       console.error('Error API', err);
  //       console.log(environment.tmdbToken);
  //     },
  //   );
  // }

  nextPage(): void {
    this.page++;
    this.page$.next(this.page);
    // this.form.get('control')?.updateValueAndValidity();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.page$.next(this.page);
      // this.form.get('control')?.updateValueAndValidity();
    }
  }

  selected(data: string): string {
    const date_splitted: string[] = data.split('-');
    const finaldate = date_splitted.reverse().join('-');

    console.log(finaldate);
    return finaldate;
  }

  goToDetails(tvShow: TvShow): void {
    console.log(tvShow.id);
    // this.tmdbService.setSelectedTvShowId(tvShow.id);
    this.router.navigate(['/tv-forms', tvShow.id]);
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}

// @Output() pippo = new EventEmitter<any>();

// date_map = new Map([
//   ["en", "yyyy-mm-dd"],
//   ["it", "dd-mm-yyyy"],
// ])
// showed_date = this.date_map.get(this.document.documentElement.lang)!

// console.log(showed_date)
// Date(data).toLocaleDateString('en-EN')
// const year: string = date_splitted[0]
// const month: string = date_splitted[1]
// const days: string = date_splitted[2]
// this.tvShows.forEach((element)=> {
// element.first_air_date = this.selected(element.first_air_date)
// console.log(element)
// console.log(element.first_air_date)
// console.log(res.results)
