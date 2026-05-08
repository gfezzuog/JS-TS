import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvFormsComponent } from './tv-forms.component';

describe('TvFormsComponent', () => {
  let component: TvFormsComponent;
  let fixture: ComponentFixture<TvFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
