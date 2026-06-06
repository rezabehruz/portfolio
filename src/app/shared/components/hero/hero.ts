import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  isMenuOpen:boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
