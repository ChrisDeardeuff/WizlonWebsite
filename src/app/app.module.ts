import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeComponent } from './views/time/time.component';
import { ConverterComponent } from './views/converter/converter.component';
import {AppRoutingModule} from "./app-routing.module";
import { GalacticComponent } from './views/galactic/galactic.component';

import {MatIconModule} from '@angular/material/icon';
import { AboutIconComponent } from './components/about-icon/about-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    ConverterComponent,
    GalacticComponent,
    AboutIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
