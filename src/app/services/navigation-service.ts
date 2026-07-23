import { Injectable, signal } from "@angular/core";

type SECTION = 'hero' | 'whyMe' | 'mySkills' | 'myProjects' | 'contactMe';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    showenSection = signal<SECTION>('hero');

    changeNavigationSection(section: SECTION){
        this.showenSection.set(section);
    }
}