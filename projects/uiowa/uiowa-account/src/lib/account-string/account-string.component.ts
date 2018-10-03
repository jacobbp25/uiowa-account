import { Component, OnInit, Input } from '@angular/core';
import { Account, FieldOption } from '../models';

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
  @Input()
  options?: FieldOption[] = [];
  constructor() {}

  output = [];
  ngOnInit() {
    this.account.elements.forEach((element, index) => {
      this.output.push({
        value: this.getElementOutput(element.webApiProperty, index),
        display: element.display,
        showDelimeter: this.account.showDelimeter(index)
      });
    });
  }

  private getOverrideValue(property: string): string {
    let element = this.options.find(x => x.name === property);
    if (element) {
      return element.display;
    }
  }

  private getElementOutput(property: string, index: number): string {
    if (this.options.length > 0) {
      let overrideValue = this.getOverrideValue(property);
      if (overrideValue) {
        return overrideValue;
      }
    }
    return this.account.getElementString(index);
  }
}
