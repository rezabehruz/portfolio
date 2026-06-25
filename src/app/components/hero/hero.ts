import { Component, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-hero',
  imports: [Header, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const el = this.elementRef.nativeElement.querySelector('.navigation-bar');
    this.renderer.removeClass(el, 'navigation-fixed');

    const rect = el.getBoundingClientRect();

    if (rect.top <= 0) this.renderer.addClass(el, 'navigation-fixed');
    else this.renderer.removeClass(el, 'navigation-fixed');
  }
}
