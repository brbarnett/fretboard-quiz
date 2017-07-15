import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FretboardComponent } from './components/fretboard/fretboard.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
