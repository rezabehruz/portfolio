import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation-service';
import { TranslatePipe} from '@ngx-translate/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-imprint',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  constructor() {
    this.navigationsService.changeNavigationSection('imprint');
    this.navigationsService.openMobileNav_2.set(true);
    this.navigationsService.toggleMobileNavigation.set(false);
    window.scrollTo(0, 0);
  }

  navigationsService = inject(NavigationService);
}
