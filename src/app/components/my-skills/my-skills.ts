import { Component, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {

  elementRef: ElementRef = inject(ElementRef);
  renderer: Renderer2 = inject(Renderer2);

  navigationsSerive = inject(NavigationService);

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const techsElement: HTMLElement = this.elementRef.nativeElement.querySelector('.techs');
    const iconsElement: HTMLElement = this.elementRef.nativeElement.querySelector('.icons');
    const learningElement: HTMLElement = this.elementRef.nativeElement.querySelector('.current-learning');

    const techRect: DOMRect = techsElement.getBoundingClientRect();

    if (techRect.top <= window.innerHeight) {
      if (window.innerWidth <= 640) {
        this.renderer.addClass(iconsElement, 'animation-icons-mobile');
        this.renderer.addClass(learningElement, 'animation-learning-mobile');
      }
      else this.renderer.addClass(techsElement, 'my-animation');
    }
    else {
      if (window.innerWidth <= 640) {
        this.renderer.removeClass(iconsElement, 'animation-icons-mobile');
        this.renderer.removeClass(learningElement, 'animation-learning-mobile');
      }
      else
        this.renderer.removeClass(techsElement, 'my-animation');
    }

    if (techRect.top < -100) this.navigationsSerive.changeNavigationSection('myProjects');

  }
}
