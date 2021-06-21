import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeComponent } from './views/time/time.component';
import { ConverterComponent } from './views/converter/converter.component';
import {AppRoutingModule} from "./app-routing.module";
import { GalacticComponent } from './views/galactic/galactic.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    ConverterComponent,
    GalacticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
