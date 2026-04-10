import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { ContactMe } from '../contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Skills, Portfolio, ContactMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
