import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c-table',
  templateUrl: './c-table.component.html',
  styleUrls: ['./c-table.component.css']
})
export class CTableComponent implements OnInit {

  // accessible by parent
  color: string = 'red';
  
  // define inputs accepted by this component
  @Input()  oneWay: string;

  // send data out of this component
  @Output() oneWayMsg: EventEmitter<string> = new EventEmitter<string>();

  @Input() twoWay: string;
  @Output() twoWayChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    console.log('in ctable ctor %s', name);
  }

  ngOnInit() {
    console.log('in ctable ngOnInit %s', name);
  }

  sendMsg() {
    this.oneWayMsg.emit('oneWayMsg msg from CTableComponent');
  }

  sendTwoMsg() {
    this.twoWayChange.emit("twoWayMsg from CTableComponent");
  }
}
