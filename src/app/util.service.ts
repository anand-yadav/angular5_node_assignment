import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }
  getIncomeTax(income){
    console.log(income)
    if(income >= 180001) {
      return (54232+(0.45*(income-180000)))
    } else if (income >= 87001) {
      return (19822+(0.37*(income-87000)))
    } else if (income >= 37001) {
      return (3572+(0.325*(income-37000)))
    } else if (income >= 18201) {
      return (0.19*(income-18200));
    } else if (income >= 0) {
      return 0;
    }
  }

}
