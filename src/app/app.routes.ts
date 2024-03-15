import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content/main-content.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', title: 'Andre Kempf', component: MainContentComponent },
  { path: 'imprint', title: 'Imprint', component: ImprintComponent },
  {
    path: 'privacy-policy',
    title: 'Privacy policy',
    component: PrivacyPolicyComponent,
  },
];
