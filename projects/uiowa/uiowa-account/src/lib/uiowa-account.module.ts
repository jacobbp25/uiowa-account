import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountStringComponent } from './account-string/account-string.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot()],
  declarations: [AccountStringComponent],
  exports: [AccountStringComponent]
})
export class UiowaAccountModule {}
