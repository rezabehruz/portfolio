import { Component } from '@angular/core';
import { Testimonial } from '../../interfaces/testimonial';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  testimonials: Testimonial[] = [
    {
      name: 'V. Schuster - Team Partner',
      detail:
        "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      imageSrc: 'assets/images/colleague-1.png',
      display: true,
    },
    {
      name: 'E.Eichinger - Team Partner',
      detail:
        'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      imageSrc: 'assets/images/colleague-2.png',
      display: false,
    },
    {
      name: 'I.Nuber - Frontend Engineer',
      detail:
        'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      imageSrc: 'assets/images/colleague-3.png',
      display: false,
    },
  ];

  currentTestimonial: number = 0;

  switchTestimonial(param: string): void {
    this.testimonials[this.currentTestimonial].display = false;

    if (param == 'next') {
      if (this.currentTestimonial == this.testimonials.length - 1) this.currentTestimonial = 0;
      else this.currentTestimonial += 1;
    } else {
      if (this.currentTestimonial == 0) this.currentTestimonial = 2;
      else this.currentTestimonial -= 1;
    }

    this.testimonials[this.currentTestimonial].display = true;
  }
}
