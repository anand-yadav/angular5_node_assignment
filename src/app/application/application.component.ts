import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from "../data.service";

import { Form } from '../form';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {

  application: Form = {
    firstName: null,
    lastName: null,
    annualSalary: null,
    superRate: null,
    paymentStartDate: null
  }

  // pass the form data to the application preview state on submitting valid information
  onSubmit() { this.data.changeInput(this.application) };

  constructor(private data: DataService) { }

  ngOnInit() {

  }

}
