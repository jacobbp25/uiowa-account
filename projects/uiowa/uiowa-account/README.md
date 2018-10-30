# UIOWA Account

An Angular library for using UIOWA MFK or UNI Account forms, output and favorites. Dependencies: Angular, ng-bootstrap, Bootstrap 4 (css)

[![Build Status](https://travis-ci.org/jacobbp25/uiowa-account.svg?branch=master)](https://travis-ci.org/jacobbp25/uiowa-account)
[![npm](https://img.shields.io/npm/v/@uiowa/uiowa-account.svg?style=flat-square)](https://www.npmjs.com/package/@uiowa/uiowa-account)

## [Demo](https://uiowa-account.firebaseapp.com)

## To Do

- favorite integration account-favorite
- tests

## Models

- `Element`: an object to represent a component of accounting structure

```typescript
const e1 = new Element('FUND', 3, 'FundElem', true);
```

- `Account`: an object to represent the full accounting structure including value

```typescript
const account = new Account('240-17-3215-03000-53515806--999-00000-21-7474-', '-', [e1]);
```

## Components

- `<uiowa-account-string></uiowa-account-string>`: Used for outputting string representation of account with tooltips
- `<uiowa-account-input></uiowa-account-input>`: Used for generating form based on account string MFK or UNI Account

## Usage

```html
<uiowa-account-string [account]="account"></uiowa-account-string>

<uiowa-account-input [account]="account"></uiowa-account-input>
```

```typescript
import { Component } from '@angular/core';
import { Account, Element } from '@uiowa/uiowa-account';

@Component({
...
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

  account = new Account(
    '240-17-3215-03000-53515806--999-00000-21-7474-',
    '-',
    this.uiConfig
  );
}
```
