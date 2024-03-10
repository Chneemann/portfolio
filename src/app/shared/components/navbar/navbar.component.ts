import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeLink: string | null | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.activeLink = fragment;
    });
  }

  getLeftPosition() {
    switch (this.activeLink) {
      case 'about-me':
        return '41px';
      case 'skills':
        return '184px';
      case 'portfolio':
        return '265px';
      default:
        return 'initial';
    }
  }
}
