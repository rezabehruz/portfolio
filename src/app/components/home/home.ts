import { AfterViewInit, Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { WhyMe } from '../why-me/why-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { Testemonials } from '../testemonials/testemonials';
import { ContactMe } from '../contact-me/contact-me';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Hero, Header, WhyMe, MySkills, MyProjects, Testemonials, ContactMe, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);

          if (element) {
            element.scrollIntoView({
              behavior: 'auto',
              block: 'start'
            });
          }
        }, 100);
      }
    });
  }}
