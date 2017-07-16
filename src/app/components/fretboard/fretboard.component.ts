import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnInit {

  positions: Array<number> = Array.from(new Array(13), (x,i) => i);
  showNotes: boolean = false;
  sixStrings: boolean = false;
  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = [
      {
        name: 'e',
        frets: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'B']
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
