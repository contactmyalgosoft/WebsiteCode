import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-free-trial-area',
  templateUrl: './free-trial-area.component.html',
  styleUrls: ['./free-trial-area.component.scss']
})
export class FreeTrialAreaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.CreateFreeTrialForm();
  }
  freeTrialForm: FormGroup

  CreateFreeTrialForm() {
    this.freeTrialForm = this.fb.group({
      email: [''],
    });
  }
}
