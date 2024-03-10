import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeLink: string | null | undefined;
  lineWidth: string = '0%';

  constructor(
    public langService: LanguageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.activeLink = fragment;
    });
  }

  changeLineWidth(width: string) {
    this.lineWidth = width;
  }

  getLeftPosition() {
    switch (this.activeLink) {
      case 'about-me':
        return '7px';
      case 'skills':
        return '149px';
      case 'portfolio':
        return '232px';
      default:
        return 'initial';
    }
  }
}
