import { Component, inject, output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { NavigationService } from '../../services/navigation-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openMenu = output<void>();

  translateService = inject(TranslateService);
  languageService = inject(LanguageService);


  changeLanguage(lang: string) {
    this.translateService.use(lang);

    if (lang === 'en'){
      this.languageService.language.set('english');
      localStorage.setItem("language_p", 'english');
    }

    if (lang === 'de'){
      this.languageService.language.set('deutsch');
      localStorage.setItem("language_p", 'deutsch');
    }
  }

  navigationsService = inject(NavigationService);

}
