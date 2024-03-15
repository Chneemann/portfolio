import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCookieconsentIgnore]',
})
export class CookieconsentIgnoreDirective {
  constructor(el: ElementRef) {
    el.nativeElement.setAttribute('data-cookieconsent', 'ignore');
  }
}
