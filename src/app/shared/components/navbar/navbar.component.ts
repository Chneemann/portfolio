import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  mobileMenu: boolean = false;

  constructor(
    public langService: LanguageService,
    private route: ActivatedRoute
  ) {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    if (window.innerWidth <= 700) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.activeLink = fragment;
    });
  }

  changeLineWidth(width: string) {
    this.lineWidth = width;
  }

  getPosition() {
    switch (this.activeLink) {
      case 'about-me':
        return this.mobileMenu ? '73px' : '7px';
      case 'skills':
        return this.mobileMenu ? '136px' : '149px';
      case 'portfolio':
        return this.mobileMenu ? '197px' : '232px';
      default:
        return 'initial';
    }
  }
}
