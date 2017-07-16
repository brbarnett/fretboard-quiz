import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnInit {

  positions: Array<number> = _.range(13);
  showNotes: boolean = false;
  sixStrings: boolean = false;
  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = [
      {
        name: 'e',
        frets: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
      },
      {
        name: 'B',
        frets: ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
      },
      {
        name: 'G',
        frets: ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
      },
      {
        name: 'D',
        frets: ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']
      },
      {
        name: 'A',
        frets: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']
      },
      {
        name: 'E',
        frets: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
      }
    ]
  }

  includes(collection, value): boolean {
    return _.includes(collection, value);
  }

  getStrings():any {
    return this.sixStrings ? this.strings : this.strings.slice(2);
  }

  selectNote(note){
    alert(`You selected ${note}`);
  }

  setShowNotes(event){
    this.showNotes = event;
  }

  setSixStrings(event){
    this.sixStrings = event;
  }

}
