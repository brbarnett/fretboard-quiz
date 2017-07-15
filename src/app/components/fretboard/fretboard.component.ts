import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent implements OnInit {

  positions: Array<number> = Array.from(new Array(13), (x,i) => i);
  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = [
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

  selectNote(note){
    alert(`You selected ${note}`);
  }

}
