import { Component } from '@angular/core';
import { Account, Element } from 'projects/uiowa-account/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uiConfig = [
    new Element('FUND', 3, 'FundElem', true),
    new Element('ORG', 2, 'OrgElem', true),
    new Element('DEPT', 4, 'DeptElem', true),
    new Element('SDEPT', 5, 'SDeptElem', true),
    new Element('GRNT/PRGM', 8, 'GrantPgmElem', true),
    new Element('IACCT', 4, 'IAcctElem', true),
    new Element('OACCT', 3, 'OrgAcctElem', true),
    new Element('DACCT', 5, 'DeptAcctElem', true),
    new Element('FNC', 2, 'FuncElem', true),
    new Element('CCTR', 4, 'CostCtrElem', true)
  ];
  uniConfig = [
    new Element('Fnd', 4, 'FundElem', true),
    new Element('AY', 2, 'AppYearElm', true),
    new Element('Org', 5, 'OrgElem', true),
    new Element('Obj', 5, 'ObjectElem', true),
    new Element('Prgm', 4, 'PrgmElem', true),
    new Element('Func', 2, 'FuncElem', true),
    new Element('Act', 4, 'ActivityElem', true),
    new Element('Line', 3, 'LineElem', true),
    new Element('UNI Fndn', 6, 'FoundElem', false)
  ];

  account = new Account(
    '240-17-3215-03000-53515806--999-00000-21-7474-',
    '-',
    this.uiConfig
  );
  account2 = new Account(
    '240-17-3215-03000-53515806-6070-999-00000-21-7474-',
    '-',
    this.uiConfig
  );

  accountUni = new Account(
    '3011-00-39045--0000-91-0000-000-',
    '-',
    this.uniConfig
  );

  accountUni2 = new Account(
    '3011-00-39045--0000-91-0000-000-123456-',
    '-',
    this.uniConfig
  );
}
