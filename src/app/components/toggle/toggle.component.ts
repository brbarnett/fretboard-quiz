import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// component sourced from: https://www.w3schools.com/howto/howto_css_switch.asp

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input()
  checked: boolean = false;

  @Input()
  label: string = '';

  @Output()
  valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleChanged(e): void {
    this.checked = !this.checked;
    this.valueChanged.emit(this.checked);
  }
}
