import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FilmReviewTableRow,
  ReviewForm,
} from '../films-details/films-details.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inputModel } from '../form-module/FormModels/inputmodel.model';

@Component({
  selector: 'app-film-dialog',
  templateUrl: './film-dialog.component.html',
  styleUrls: ['./film-dialog.component.css'],
})
export class FilmDialogComponent implements OnInit {
  formReview = new FormReviewFilm();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { review: FilmReviewTableRow },
    private dialogRef: MatDialogRef<FilmDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.formReview.patchValue(this.data.review);
  }

  close(save: boolean = false) {
    this.dialogRef.close(save ? this.formReview.getRawValue() : undefined);
  }
}

export class FormReviewFilm extends FormGroup {
  constructor() {
    super({
      author: new FormControl(),
      content: new FormControl(null, [Validators.required]),
      createdAt: new FormControl(),
      filmTitle: new FormControl(),
      original_language: new FormControl(),
      rating: new FormControl(),
    });
  }
}

// controlName: string;
// label: string;
// type: string;
// step?: string;
// max?: string;
// min?: string;
