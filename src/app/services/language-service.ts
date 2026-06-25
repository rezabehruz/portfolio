import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = signal<'english' | 'deutsch'>('english');
}
