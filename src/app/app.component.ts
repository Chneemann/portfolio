import { Component, Injectable } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
})
export class AppComponent {
  title = 'Portfolio';

  constructor(public langService: LanguageService, private router: Router) {
    this.router.events.subscribe((event) => {});
  }
}
