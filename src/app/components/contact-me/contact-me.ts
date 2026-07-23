import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  contactForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { validators: [Validators.required] }),
  });

  formSubmitted: boolean = false;
  checkbox: 'checked' | 'unChecked' = 'unChecked';

  toggleCheckBox() {
    if (this.checkbox == 'checked') this.checkbox = 'unChecked';
    else this.checkbox = 'checked';
  }

  submitForm() {
    if (!this.contactForm.valid || this.checkbox == 'unChecked') {
      console.log(this.contactForm.value);
      this.formSubmitted = true;
    } else console.log('form submitted!');
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }


  elementRef: ElementRef = inject(ElementRef);
  renderer: Renderer2 = inject(Renderer2);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const eleParent: HTMLElement = this.elementRef.nativeElement.querySelector('.content');
    const imgArrow: HTMLElement = this.elementRef.nativeElement.querySelector('.arrow-normal');
    const contactForm: HTMLElement = this.elementRef.nativeElement.querySelector(".contact-form");
    const contactDetails: HTMLElement = this.elementRef.nativeElement.querySelector(".details-contact");
    const parentRect: DOMRect = eleParent.getBoundingClientRect();

    if (parentRect.top < window.innerHeight) {
      this.renderer.addClass(imgArrow, 'up-animation');
      this.renderer.addClass(contactDetails, 'details-animation');
      this.renderer.addClass(contactForm, 'form-animation');
    }
    else {
      this.renderer.removeClass(imgArrow, 'up-animation');
      this.renderer.removeClass(contactDetails, 'details-animation');
      this.renderer.removeClass(contactForm, 'form-animation');
    }
  }
}
