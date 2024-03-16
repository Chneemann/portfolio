import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private observer: IntersectionObserver | null = null;

  constructor() {}

  observeIntersection(
    className: string,
    animationClass: string,
    elementRef: ElementRef
  ) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.classList.contains(className)
          ) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    let targetSections = elementRef.nativeElement.querySelectorAll(
      `.${className}`
    ) as NodeListOf<HTMLElement>;
    targetSections.forEach((targetSection) => {
      this.observer?.observe(targetSection);
    });
  }

  disconnectObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
