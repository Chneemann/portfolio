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
    const skills = [
      'skill1',
      'skill2',
      'skill3',
      'skill4',
      'skill5',
      'skill6',
      'skill7',
      'skill8',
      'skill9',
      'skill10',
    ];

    skills.forEach((skill, index) => {
      setTimeout(() => {
        this.animationService.observeIntersection(
          skill,
          'animation-coming-in',
          this.elementRef
        );
      }, index * 50); // Ändere die Verzögerung je nach Bedarf
    });
  }

  ngOnDestroy() {
    this.animationService.disconnectObserver();
  }
}
