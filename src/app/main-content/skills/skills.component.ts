import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    public langService: LanguageService,
    private animationService: AnimationService
  ) {}

  ngAfterViewInit() {
    const skills = Array.from({ length: 10 }, (_, i) => `skill${i + 1}`);

    skills.forEach((skill) => {
      this.animationService.observeIntersection(
        skill,
        'animation-coming-in',
        this.elementRef
      );
    });
  }

  ngOnDestroy() {
    this.animationService.disconnectObserver();
  }

  getLineStyle() {
    this.langService.currentLang = 'en';
  }
}
