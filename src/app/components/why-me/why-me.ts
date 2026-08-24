import { Component, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {

  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  navigationsService = inject(NavigationService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.elementRef.nativeElement.querySelector('.header');
    const locationAbout: HTMLElement = this.elementRef.nativeElement.querySelector('.location-about');
    const headerRect: DOMRect = header.getBoundingClientRect();
    const rect: DOMRect = locationAbout.getBoundingClientRect();

    if (rect.top <= window.innerHeight) {
      if (window.innerWidth > 640) this.renderer.addClass(locationAbout, 'my-animation');
    }
    else {
      if (window.innerWidth > 640) this.renderer.removeClass(locationAbout, 'my-animation');
    }

    if (headerRect.top < -100) this.navigationsService.changeNavigationSection('mySkills');
    else if (window.innerHeight - headerRect.top > 200) this.navigationsService.changeNavigationSection('whyMe');
    else this.navigationsService.changeNavigationSection('hero');

  }
}
