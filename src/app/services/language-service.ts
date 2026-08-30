import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = signal<'english' | 'deutsch'>(this.getLanguage());

  getLanguage(){
    const lang = localStorage.getItem("language_p");
    if(lang == "deutsch") return 'deutsch';
    else  return 'english';
  }
}
