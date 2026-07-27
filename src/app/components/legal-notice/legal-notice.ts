import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { NavigationService } from '../../services/navigation-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  navigationsService = inject(NavigationService);

  constructor() {
    this.navigationsService.changeNavigationSection('legal-notice');
  } 
}
