import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  @Input()
  labelOff: string;
  @Input()
  labelOn: string;
  @Input()
  defaultValue: boolean;

  @Output()
  value = new EventEmitter();

  checkboxValue: any;

  constructor() {}

  ngOnInit() {
    this.checkboxValue = this.defaultValue;
  }

  toggleCheck(event: any) {
    this.value.emit(event.target.checked);
  }
}
