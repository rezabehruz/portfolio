import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Hero } from './shared/components/hero/hero';
import { AboutMe } from "./shared/components/about-me/about-me";




@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, Header, Hero, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
