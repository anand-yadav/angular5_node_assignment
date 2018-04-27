import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Form } from './form';

@Injectable()
export class DataService {

  constructor() {}
  private paySlipInput = new Subject<Form>();

  paySlipInput$ = this.paySlipInput;

  changeInput(data: Form) {
    this.paySlipInput$.next(data)
  }

}
