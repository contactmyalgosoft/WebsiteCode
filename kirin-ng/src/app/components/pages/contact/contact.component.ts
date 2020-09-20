import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { IdVM } from 'src/app/viewModels/common/IdVM';
import { environment } from 'src/environments/environment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactVM } from 'src/app/viewModels/contactVM';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

declare let $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService,
    private contactService: ContactService) { }
  baseUrl = environment.apiUrl;

  ngOnInit() {

    this.CreateContactForm();
  }
  contactForm: FormGroup;
  isContactFormSubmitted: boolean = false;

  get frm() { return this.contactForm.controls; }
  CreateContactForm() {
    this.contactForm = this.fb.group({
      Id: [[Validators.required]],
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Subject: ['', [Validators.required]],
      // PhoneNumber: ['',[Validators.pattern("^((\\+91-?)|0)?[0-9]{15}$")]],
      PhoneNumber: ['', [Validators.pattern("^[0-9]*$")]],
      Message: ['']
    });
  }



  SaveContact() {
    this.isContactFormSubmitted = true;
    if (this.contactForm.invalid) {
      // alert("Form Invalid");
      return;
    } else {
      let contactData = new ContactVM();
      contactData = this.contactForm.value;
      // contactData.Message = 'Hello <b>' + contactData.Name + ', </b> <br>  <br>    '+ contactData.Message + '<br> <br>' + '<b> Contact Number: </b>' + contactData.PhoneNumber + '<br> <br> <br> Thanks, <br> My Algo Soft'; 
      contactData.Message = 'Hello <b>' + contactData.Name + '</b>, <br /><br />' + contactData.Message + '<br />Your Contact No.: ' + contactData.PhoneNumber + '<br /><br />Thanks,<br />My Algo Soft';
      // this.spinner.show();

      $('.preloader').fadeIn('slow');

      this.contactService
        .SaveContact(contactData)
        .subscribe((response: any) => {
          if (response != null) {
            this.isContactFormSubmitted = false;
           this.contactForm.reset();
            // this.spinner.hide();
            $('.preloader').fadeOut('fast');
            this.toastrService.success('Mail sent Sucessfully', 'Success');
            // this.router.navigate(['/item/itemlist']);
          } else {
            // this.spinner.hide();
            $('.preloader').fadeOut('fast');
            this.toastrService.error('Something went wrong', 'Error');
          }
        });
    }
  }

}
