import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { UtilService } from "../util.service";

import { Form } from '../form';

@Component({
  selector: 'app-application-preview',
  templateUrl: './application-preview.component.html',
  styleUrls: ['./application-preview.component.css'],
})
export class ApplicationPreviewComponent implements OnInit {
  payslipData: any;
  payslipDataStr: string;
  constructor(private data: DataService, private util: UtilService) {
    this.payslipData = {
      name: null,
      payPeriod: null,
      grossIncome: null,
      incomeTax: null,
      netIncome: null,
      superAmount:null
    }
  }

  ngOnInit() {
    this.data.paySlipInput$.subscribe(data => {
      this.payslipData.name = (data.firstName && data.lastName) ? `${data.firstName} ${data.lastName}` : (data.firstName || data.lastName);
      this.payslipData.grossIncome = Math.round(data.annualSalary/12);
      this.payslipData.incomeTax = Math.round(this.util.getIncomeTax(data.annualSalary));
      this.payslipData.netIncome = Math.round(this.payslipData.grossIncome-this.payslipData.incomeTax);
      this.payslipData.superAmount = Math.round(this.payslipData.grossIncome * data.superRate);
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      this.payslipData.payPeriod = monthNames[(new Date(data.paymentStartDate)).getMonth()];
    })
  }

}
