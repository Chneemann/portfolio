import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-single.component.html',
  styleUrl: './portfolio-single.component.scss',
})
export class PortfolioSingleComponent {
  projects = [
    {
      name: 'Sharkie',
      imgPath: 'sharkie.svg',
      code: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      linkLiveTest: 'http://sharkie.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/sharkie',
    },
    {
      name: 'Join',
      imgPath: 'join.svg',
      code: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLiveTest: '',
      linkGithub: '',
    },
    {
      name: 'Simple CRM',
      imgPath: 'simple-crm.svg',
      code: 'Angular | Firebase',
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      linkLiveTest: '',
      linkGithub: '',
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
