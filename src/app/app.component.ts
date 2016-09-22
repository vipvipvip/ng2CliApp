import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  name = "John"
  oneWayMsg = '';
  msgFromChild = "NONE";
  twoWayChangeMsg = "";

  twoWay = "TwoWay";

  sayHello(){
    console.log('hello');
    this.twoWayChangeMsg = "changed by parent";
  }

  getMsg(val:any) {
    this.oneWayMsg = val;
  }
}
