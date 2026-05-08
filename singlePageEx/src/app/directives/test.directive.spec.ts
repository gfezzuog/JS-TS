import { ElementRef } from '@angular/core';
import { TestDirective } from './test.directive';

describe('TestDirective', () => {
  it('should create an instance', () => {
    const elementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new TestDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
