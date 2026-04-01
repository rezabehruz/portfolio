import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Hero } from './shared/components/hero/hero';
import { AboutMe } from "./shared/components/about-me/about-me";
import { Skills } from './shared/components/skills/skills';
import { Porfolio } from './shared/components/porfolio/porfolio';




@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, Header, Hero, AboutMe, Skills, Porfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
