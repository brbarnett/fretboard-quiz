import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { Note } from '../models/note';

@Injectable()
export class QuizService {

  messageUpdated: Subject<string> = new Subject<string>();
  notePlayed: Subject<Note> = new Subject<Note>();
  notes: Array<string> = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  noteToQuiz: string = '';
  noteToQuizUpdated: BehaviorSubject<string> = new BehaviorSubject<string>(this.getRandomNote());
  strings: Array<string> = ['E', 'A', 'D', 'G'];
  stringToQuiz: string = '';
  stringToQuizUpdated: BehaviorSubject<string> = new BehaviorSubject<string>(this.getRandomString());

  constructor() {
    this.notePlayed.subscribe(note => this.testQuiz(note));
    this.noteToQuizUpdated.subscribe(note => this.noteToQuiz = note);
    this.stringToQuizUpdated.subscribe(str => this.stringToQuiz = str);
  }

  getRandomNote(): string {
    return this.notes[_.random(0, 11)];
  }

  getRandomString(): string {
    return this.strings[_.random(0, 3)];
  }

  runQuiz() {
    this.noteToQuizUpdated.next(this.getRandomNote());
    this.stringToQuizUpdated.next(this.getRandomString());
  }

  testQuiz(note) {
    console.log(note);

    if (note.note === this.noteToQuiz && note.string === this.stringToQuiz) {
      this.messageUpdated.next('Correct!');

      this.runQuiz();
    }
    else {
      this.messageUpdated.next('Incorrect...');
    }
  }

}