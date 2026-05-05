import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTest]'
})

export class TestDirective implements OnChanges {

  @Input() pointColor!: number;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pointColor']) {
      this.checkPoints(this.pointColor);
    }
  }

  private checkPoints(points: number): void {
    this.element.nativeElement.style.color =
      points < 5 ? 'black' : 'red';
  }
}

