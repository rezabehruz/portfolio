import { Component, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {

  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const el:HTMLElement = this.elementRef.nativeElement.querySelector('.location-about');
    const rect:DOMRect = el.getBoundingClientRect();

    if (rect.top <= window.innerHeight) {
      if (window.innerWidth <= 640) this.renderer.addClass(el, 'my-animation-mobile');
      else this.renderer.addClass(el, 'my-animation');
    }
    else {
      if (window.innerWidth <= 640) this.renderer.removeClass(el, 'my-animation-mobile');
      else this.renderer.removeClass(el, 'my-animation');
    }

  }
}
