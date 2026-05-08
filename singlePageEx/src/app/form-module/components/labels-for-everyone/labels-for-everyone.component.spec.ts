import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsForEveryoneComponent } from './labels-for-everyone.component';

describe('LabelsForEveryoneComponent', () => {
  let component: LabelsForEveryoneComponent;
  let fixture: ComponentFixture<LabelsForEveryoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelsForEveryoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsForEveryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
