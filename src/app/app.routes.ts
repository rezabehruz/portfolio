import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'legal-notice', component: LegalNotice},
  { path: '**', component: NotFound}
];