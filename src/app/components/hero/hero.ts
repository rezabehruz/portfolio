import { Component, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Header } from '../header/header';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-hero',
  imports: [Header, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  isMenuOpen: boolean = false;
  openMenu_2: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  elementRef: ElementRef = inject(ElementRef);
  renderer: Renderer2 = inject(Renderer2);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const el: HTMLElement = this.elementRef.nativeElement.querySelector('.navigation-bar');
    this.renderer.removeClass(el, 'navigation-fixed');

    const rect: DOMRect = el.getBoundingClientRect();

    if (rect.top <= 0) this.renderer.addClass(el, 'navigation-fixed');
    else this.renderer.removeClass(el, 'navigation-fixed');

    const elParent: HTMLElement = this.elementRef.nativeElement.querySelector('.content');
    const rectParent: DOMRect = elParent.getBoundingClientRect();

    if (rectParent.top < -250) this.openMenu_2 = true;
    else this.openMenu_2 = false;
  }

  translateService = inject(TranslateService);
  languageService = inject(LanguageService);

  changeLanguage(lang: 'de' | 'en') {
    this.translateService.use(lang);

    if (lang === 'de') this.languageService.language.set('deutsch');

    if (lang === 'en') this.languageService.language.set('english');

    this.closeMenue();
  }

  closeMenue() {
    this.isMenuOpen = false;
    this.openMenu_2 = false;
  }
}
