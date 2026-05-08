import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TmdbService } from '../../../services/tmdb.service';
import { TvShow } from '../../../models/tvshow.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TvGenresResponse } from '../../../models/tvgenre.model';
import { TvFormValidatorDirective } from '../../../directives/tv-form-validator.directive';

@Component({
  selector: 'app-tv-forms',
  templateUrl: './tv-forms.component.html',
  styleUrls: ['./tv-forms.component.css'],
})
export class TvFormsComponent implements OnInit {
  tvShow!: TvShow;
  imageUrl!: string;
  createdByString: string = '';
  tvGenres!: TvGenresResponse;
  movieForm = new FormGroup({
    adult: new FormControl(null, [Validators.required]),
    backdrop_path: new FormControl(null, [Validators.required]),
    created_by: new FormControl(null, [Validators.required]),
    genres: new FormControl(null, [Validators.required]),
    last_air_date: new FormControl(null, [
      Validators.required,
      TvFormValidatorDirective.checkDate,
    ]),
    popularity: new FormControl(null, [
      Validators.required,
      Validators.min(100),
      Validators.max(600),
    ]),
    overview: new FormControl(null, [Validators.required]),
    original_language: new FormControl(null, [Validators.maxLength(2)])
  });

  /* ----------------------------------- */

  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    
    this.movieForm.get('last_air_date')?.valueChanges.subscribe((pippo)=> {
      console.log(pippo)
    })

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.tmdbService.getTvShowDetails(id).subscribe((res) => {
        // res.adult = true;
        // res.first_air_date = JSON.stringify(new Date());
        this.tvShow = res;
        this.tvShow.genres = (res.genres as any)[0];
        console.log('perforza di cose', this.tvShow.adult);
        // console.log(res.genres)
        this.imageUrl = 'https://image.tmdb.org/t/p/w780' + res.backdrop_path;
        this.movieForm.patchValue(this.tvShow);
      });
    } else {
      console.error('Nessun ID trovato');
      this.router.navigate(['/TvShows']);
    }
    this.tmdbService.getTvShowGenres().subscribe((response) => {
      this.tvGenres = response;
    });

    /* ----------------------------------- */

  }

  print() {
    console.log(this.movieForm.value);
  }

  comparison(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }
}
// console.log(this.tvShow.backrop_path);
// this.movieForm.setValue(this.tvShow)
// console.log(this.movieForm.get('backdrop_path'))
// console.log(this.tvShow)
// console.log(this.tvShow.created_by)
