import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { QuizService } from '../../services/quiz.service';
import { Note } from '../../models/note';
import { String } from '../../models/string';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnInit {

  positions: Array<number> = _.range(13);
  showNotes: boolean = false;
  sixStrings: boolean = false;
  stringToEnable: string = '';
  strings: Array<String> = [
    new String('e', ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']),
    new String('B', ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']),
    new String('G', ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']),
    new String('D', ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']),
    new String('A', ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']),
    new String('E', ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']),
  ];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.stringToQuizUpdated.subscribe(str => this.stringToEnable = str);
  }

  includes(collection, value): boolean {
    return _.includes(collection, value);
  }

  getStrings(): any {
    return this.sixStrings ? this.strings : this.strings.slice(2);
  }

  playNote(string: string, note: string) {
    this.quizService.notePlayed.next(new Note(string, note));
  }

  setShowNotes(event) {
    this.showNotes = event;
  }

  setSixStrings(event) {
    this.sixStrings = event;
  }

}
