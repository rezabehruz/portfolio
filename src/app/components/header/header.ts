import { Component, inject} from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { NavigationService, SECTION } from '../../services/navigation-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translateService = inject(TranslateService);
  languageService = inject(LanguageService);
  navigationsService = inject(NavigationService);

  changeLanguage(lang: string) {
    this.translateService.use(lang);

    if (lang === 'en') {
      this.languageService.language.set('english');
      localStorage.setItem('language_p', 'english');
    }

    if (lang === 'de') {
      this.languageService.language.set('deutsch');
      localStorage.setItem('language_p', 'deutsch');
    }

    this.closeMenu();
  }

  updateHeader(section: SECTION) {
    this.navigationsService.changeNavigationSection(section);
  }

  isSectionActive(section: SECTION) {
    return this.navigationsService.showenSection() === section;
  }

  closeMenu() {
    this.navigationsService.toggleMobileNavigation.set(false);
  }

  toggleMenu() {
    this.navigationsService.toggleMobileNavigation.set(
      !this.navigationsService.toggleMobileNavigation(),
    );
  }
}
