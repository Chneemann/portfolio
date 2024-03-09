import { Component } from '@angular/core';
import { PortfolioSingleComponent } from './portfolio-single/portfolio-single.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioSingleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
