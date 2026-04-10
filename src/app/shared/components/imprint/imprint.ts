import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-imprint',
  imports: [Header, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {}
