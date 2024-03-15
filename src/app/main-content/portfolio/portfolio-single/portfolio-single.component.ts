import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-single',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio-single.component.html',
  styleUrl: './portfolio-single.component.scss',
})
export class PortfolioSingleComponent {
  projects = [
    {
      name: 'Sharkie',
      imgPath: 'sharkie.jpg',
      code: 'JavaScript | HTML | CSS',
      linkLiveTest: 'http://sharkie.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/sharkie',
      released: true,
    },
    {
      name: 'Join',
      imgPath: 'join.jpg',
      code: 'JavaScript | HTML | CSS',
      linkLiveTest: 'http://join.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/gruppenarbeit-join',
      released: true,
    },
    {
      name: 'Simple CRM',
      imgPath: 'simple-crm.jpg',
      code: 'Angular | Firebase',
      linkLiveTest: '',
      linkGithub: '',
      released: false,
    },
  ];

  getProjectStyle(i: number) {
    return {
      transform: i % 2 !== 0 ? 'scaleX(-1)' : '',
    };
  }

  getDescriptionStyle(i: number) {
    return {
      transform: i % 2 !== 0 ? 'scaleX(-1)' : '',
      'text-align': i % 2 !== 0 ? 'end' : '',
    };
  }
}
