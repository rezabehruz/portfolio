import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { WhyMe } from '../why-me/why-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { Testemonials } from '../testemonials/testemonials';
import { ContactMe } from '../contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyMe, MySkills, MyProjects, Testemonials, ContactMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
