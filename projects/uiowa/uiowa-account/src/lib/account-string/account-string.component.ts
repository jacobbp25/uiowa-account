import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/account';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'uiowa-account-string',
  template: `
  <span *ngFor="let element of output" placement="bottom" ngbTooltip="{{element.display}}">{{element.value}}<span
    *ngIf="element.showDelimeter">{{account.delimiter}}</span></span>
  `
})
export class AccountStringComponent implements OnInit {
  @Input()
  account: Account;
  constructor() {}

  output = [];
  ngOnInit() {
    this.account.elements.forEach((element, index) => {
      this.output.push({
        value: this.account.getElementString(index),
        display: element.display,
        showDelimeter: this.account.showDelimeter(index)
      });
    });
  }
}
