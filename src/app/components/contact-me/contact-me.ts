import { Component } from '@angular/core';
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
}
