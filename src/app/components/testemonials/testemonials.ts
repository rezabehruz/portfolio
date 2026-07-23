import { Component, computed, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { Reference } from '../../interfaces/reference';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-testemonials',
  imports: [],
  templateUrl: './testemonials.html',
  styleUrl: './testemonials.scss',
})
export class Testemonials {

  languageService = inject(LanguageService);

  renderer = inject(Renderer2);
  elementRef = inject(ElementRef);

  references = computed<Reference[]>(() => {
    if (this.languageService.language() == 'english') return this.referencesEN;
    else return this.referencesDE;
  });

  referencesEN: Reference[] = [
    {
      name: 'Sahra Mueller',
      project: 'DA Bublle',
      statement:
        '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’',
      linkedIn: 'https://www.linkedin.com/',
    },
    {
      name: 'James Rugman',
      project: 'Join',
      statement:
        '‘’Claudia is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.’’',
      linkedIn: 'https://www.linkedin.com/',
    },
    {
      name: 'Evelyn Marx',
      project: 'Sharkie',
      statement:
        '‘’ She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
      linkedIn: 'https://www.linkedin.com/',
    },
  ];

  referencesDE: Reference[] = [
    {
      name: 'Sahra Mueller',
      project: 'DA Bublle',
      statement:
        '‘’Er musste Inhalte in Zusammenarbeit mit den Teammitgliedern entwickeln, formatieren und liefern. Er ist eine zuverlässige und freundliche Person.’’',
      linkedIn: 'https://www.linkedin.com/',
    },
    {
      name: 'James Rugman',
      project: 'Join',
      statement:
        '‘’Claudia ist eine zuverlässige und freundliche Person. Sie arbeitet strukturiert und schreibt klaren Code. Ich empfehle sie als Kollegin.’’',
      linkedIn: 'https://www.linkedin.com/',
    },
    {
      name: 'Evelyn Marx',
      project: 'Sharkie',
      statement:
        '‘’ Sie ist eine vertrauenswürdige Teamplayerin und kann mit dem Stress von Deadlines gut umgehen. Sie arbeitet strukturiert und schreibt klaren Code.‘’',
      linkedIn: 'https://www.linkedin.com/',
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const eleReferences: HTMLElement = this.elementRef.nativeElement.querySelector('.references');
    const eleReferenceArr: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('.reference');
    const eleReferencesRect: DOMRect = eleReferences.getBoundingClientRect();

    if (eleReferencesRect.top <= window.innerHeight) {
      if (window.innerWidth > 640) {
        eleReferenceArr.forEach(reference => {
          this.renderer.addClass(reference, 'my-animation');
        });
      } else {
        eleReferenceArr.forEach(reference => {
          this.renderer.addClass(reference, 'animation-mobile');
        });
      }
    }
    else eleReferenceArr.forEach(reference => {
      if (window.innerWidth > 640)
        this.renderer.removeClass(reference, 'my-animation');
      else
        this.renderer.removeClass(reference, 'animation-mobile');
    })
  }
}
