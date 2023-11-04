import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafestoreModule } from './cafestore/cafestore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
