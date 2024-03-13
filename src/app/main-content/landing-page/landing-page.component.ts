import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(public langService: LanguageService) {}
}
