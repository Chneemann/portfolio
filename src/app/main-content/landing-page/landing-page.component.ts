import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationService,
    public langService: LanguageService
  ) {}

  ngAfterViewInit() {
    this.animationService.observeIntersection(
      'left-text',
      'animation-coming-in-iam',
      this.elementRef
    );
    this.animationService.observeIntersection(
      'name',
      'animation-coming-in-name',
      this.elementRef
    );
    this.animationService.observeIntersection(
      'profession',
      'animation-coming-in-profession',
      this.elementRef
    );
  }

  ngOnDestroy() {
    this.animationService.disconnectObserver();
  }
}
