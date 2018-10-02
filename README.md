# Uiowa Account App

`uiowa-account` is an Angular Library for account input and display. It was build to be used with the common use cases for UI MFK and UNI Account. The library has a peer dependency on Angular >= 6, ng-bootstrap >= 2, bootstrap 4 (css) and @uiowa/digit-only as of October 2018.

[![Build Status](https://travis-ci.org/jacobbp25/uiowa-account.svg?branch=master)](https://travis-ci.org/jacobbp25/uiowa-account)
[![npm](https://img.shields.io/npm/v/@uiowa/uiowa-account.svg?style=flat-square)](https://www.npmjs.com/package/@uiowa/uiowa-account)

## [Demo](https://uiowa-account.firebaseapp.com)

##To Do

- form version account-input
- favorite integration account-favorite
- tests

## Features

'account-string'

1. Correctly displays delimited string based on configuration of institution account
1. Correctly displays accounts with missing elements like IACCT and can choose what to fill the string with
1. Correctly ends the string without delimiter in the case of optional file missing or string ending with delimiter

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
