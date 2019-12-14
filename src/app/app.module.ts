import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForTracbyComponent } from './ng-for-tracby/ng-for-tracby.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForTracbyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
