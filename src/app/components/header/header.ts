import { Component, inject, output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { NavigationService } from '../../services/navigation-service';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openMenu = output<void>();

  translateService = inject(TranslateService);
  languageService = inject(LanguageService);


  changeLanguage(lang: string) {
    this.translateService.use(lang);

    if (lang === 'en')
      this.languageService.language.set('english');

    if (lang === 'de')
      this.languageService.language.set('deutsch');

  }

  navigationsService = inject(NavigationService);

}
