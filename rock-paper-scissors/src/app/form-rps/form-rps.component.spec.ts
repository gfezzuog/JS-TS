import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRpsComponent } from './form-rps.component';

describe('FormRpsComponent', () => {
  let component: FormRpsComponent;
  let fixture: ComponentFixture<FormRpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
