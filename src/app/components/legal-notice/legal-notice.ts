import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { NavigationService } from '../../services/navigation-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer, TranslatePipe, RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  constructor() {
    this.navigationsService.changeNavigationSection('legal-notice');
    window.scrollTo(0, 0);
  }

  isMenuOpen: boolean = false;
  navigationsService = inject(NavigationService);
  translateService = inject(TranslateService);
  languageService = inject(LanguageService);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: 'de' | 'en') {
    this.translateService.use(lang);

    if (lang === 'de') this.languageService.language.set('deutsch');

    if (lang === 'en') this.languageService.language.set('english');
  }
}
