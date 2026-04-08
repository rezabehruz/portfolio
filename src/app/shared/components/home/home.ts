import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { ContactMe } from '../contact-me/contact-me';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, AboutMe, Skills, Portfolio, ContactMe, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
