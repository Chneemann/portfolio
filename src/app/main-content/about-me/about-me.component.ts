import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationService } from '../../services/animation.service';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationService
  ) {}

  ngAfterViewInit() {
    this.animationService.observeIntersection(
      'section-right',
      'animation-coming-in',
      this.elementRef
    );
  }

  ngOnDestroy() {
    this.animationService.disconnectObserver();
  }
}
