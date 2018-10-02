import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

// import { UiowaAccountModule } from 'projects/uiowa/uiowa-account/src/public_api';
import { UiowaAccountModule } from '@uiowa/uiowa-account';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule.forRoot(), UiowaAccountModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
