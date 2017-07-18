import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuizService {

  notes: Array<string> = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  noteToQuiz: Subject<string> = new Subject<string>();
  strings: Array<string> = ['E', 'A', 'D', 'G'];
  stringToQuiz: Subject<string> = new Subject<string>();
  notePlayed: Subject<string> = new Subject<string>();

  constructor() {
    this.runQuiz();

    this.notePlayed.subscribe(note => this.testQuiz(note));
  }

  getRandomNote(): string {
    return this.notes[_.random(0, 11)];
  }

  getRandomString(): string {
    return this.strings[_.random(0, 3)];
  }

  runQuiz() {
    this.noteToQuiz.next(this.getRandomNote());
    this.stringToQuiz.next(this.getRandomString());
  }

  testQuiz(note) {
    console.log(note);
  }

}