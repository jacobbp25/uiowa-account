import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/account';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'uiowa-account-string',
  template: `
  <span *ngFor="let element of account.Elements; let i = index"
  [attr.data-index]="i" placement="bottom" ngbTooltip="{{element.Display}}">{{account.getElementString(i)}}<span
    *ngIf="account.showDelimeter(i)">{{account.Delimiter}}</span></span>
  `
})
export class AccountStringComponent implements OnInit {
  @Input()
  account: Account;
  test: Account;
  constructor() {}

  ngOnInit() {
    this.test = new Account(
      this.account.Value,
      this.account.Delimiter,
      this.account.Elements
    );
  }
}
