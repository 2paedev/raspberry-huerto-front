import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-buttom.component.html',
  styleUrls: ['./custom-buttom.component.scss'],
})
export class CustomButtomComponent implements OnInit {
  @Input()
  icon: string;
  @Input()
  label: string;
  @Output()
  action = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  callbackAction() {
    this.action.emit();
  }
}
