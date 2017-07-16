import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { FretboardComponent } from './components/fretboard/fretboard.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ToggleComponent } from './components/toggle/toggle.component';

// services
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    FretboardComponent,
    ToggleComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
