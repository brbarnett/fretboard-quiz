import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class QuizService {

  notes: Array<string> = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  constructor() { }

  getRandomNote(): string {
    return this.notes[_.random(0, 11)];
  }

}
