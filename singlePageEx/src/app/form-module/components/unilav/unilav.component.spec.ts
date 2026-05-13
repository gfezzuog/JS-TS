import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNILAVComponent } from './unilav.component';

describe('UNILAVComponent', () => {
  let component: UNILAVComponent;
  let fixture: ComponentFixture<UNILAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNILAVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UNILAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
