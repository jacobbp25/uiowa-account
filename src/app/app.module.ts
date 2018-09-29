import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UiowaAccountModule } from 'projects/uiowa-account/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiowaAccountModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
