import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsContainerComponent } from './points-container.component';

describe('PointsContainerComponent', () => {
  let component: PointsContainerComponent;
  let fixture: ComponentFixture<PointsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
