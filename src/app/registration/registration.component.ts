import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    twitterHandle: new FormControl('', Validators.required),
    instagramHandle: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    university: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    salesMethod: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required)
  });

  constructor(public fb: FormBuilder, public formService: FormService) {

  }


  submit() {
    this.formService.addUser(this.regForm.value);
  }
  ngOnInit(): void {
  }

}
