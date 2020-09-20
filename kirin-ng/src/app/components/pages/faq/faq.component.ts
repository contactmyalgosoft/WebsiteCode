import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.CreateContactForm();
  }
  contactForm: FormGroup;
  
  CreateContactForm() {
    this.contactForm = this.fb.group({
      Id: [[Validators.required]],
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Subject: ['Standard Subject', [Validators.required]],
      PhoneNumber: [''],
      Message: ['Standard message']
    });
  }
}
