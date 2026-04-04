import { Routes } from '@angular/router';
import { Home } from './shared/components/home/home';
import { Imprint } from './shared/components/imprint/imprint';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'imprint', component: Imprint },
];
