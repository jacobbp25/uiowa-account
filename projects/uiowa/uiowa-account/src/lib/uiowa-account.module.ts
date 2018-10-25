import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountStringComponent } from './account-string/account-string.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountInputComponent } from './account-input/account-input.component';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, NgbModule, DigitOnlyModule, ReactiveFormsModule, FormsModule],
  declarations: [AccountStringComponent, AccountInputComponent],
  exports: [AccountStringComponent, AccountInputComponent]
})
export class UiowaAccountModule {}
