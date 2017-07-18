import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { QuizService } from '../../services/quiz.service';
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
  }

  includes(collection, value): boolean {
    return _.includes(collection, value);
  }

  getStrings(): any {
    return this.sixStrings ? this.strings : this.strings.slice(2);
  }

  playNote(note) {
    this.quizService.notePlayed.next(note);
  }

  setShowNotes(event) {
    this.showNotes = event;
  }

  setSixStrings(event) {
    this.sixStrings = event;
  }

}
