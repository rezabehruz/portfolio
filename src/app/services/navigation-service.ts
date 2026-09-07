import { Injectable, signal } from '@angular/core';

export type SECTION = 'hero' | 'whyMe' | 'mySkills' | 'myProjects' | 'contactMe' | 'legal-notice';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  showenSection = signal<SECTION>('hero');
  toggleMobileNavigation = signal<boolean>(false);
  openMobileNav_2 = signal<boolean>(false);

  changeNavigationSection(section: SECTION) {
    this.showenSection.set(section);
  }
}
