import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowForkComponent } from './film-show-fork.component';

describe('FilmShowForkComponent', () => {
  let component: FilmShowForkComponent;
  let fixture: ComponentFixture<FilmShowForkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmShowForkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
