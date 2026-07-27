import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [Header, Footer, TranslatePipe, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  isMenuOpen: boolean = false;
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
