import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { NavigationService } from '../../services/navigation-service';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  navigationsService = inject(NavigationService);
  translateService = inject(TranslateService);
  languageService = inject(LanguageService);

  changeLanguage(lang: 'de' | 'en') {
    this.translateService.use(lang);

    if (lang === 'de') this.languageService.language.set('deutsch');

    if (lang === 'en') this.languageService.language.set('english');

    this.closeMenu();
  }

  closeMenu() {
    this.navigationsService.toggleMobileNavigation.set(false);
  }

  elementRef = inject(ElementRef);
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const el: HTMLElement = this.elementRef.nativeElement.querySelector('.content');
    const rect: DOMRect = el.getBoundingClientRect();

    if (rect.top < -200) this.navigationsService.openMobileNav_2.set(true);
    else this.navigationsService.openMobileNav_2.set(false);
  }
}
