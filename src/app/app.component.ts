import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { YahooQuotesService } from './services/yahoo-quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YahooQuotesService]
})

export class AppComponent {
  name = 'John';
  title = 'app works!';
  oneWayMsg = '';
  tickers=[];
  twoWay = "TwoWay";


  constructor(private yqs: YahooQuotesService) {}
  sayHello(){
    console.log('hello');
    this.twoWay = "changed by parent";
    this.yqs.getStockQuote('').subscribe(response => {
      this.tickers = response.json().query.results.quote;
      console.log(this.tickers);
    });
  }

  getMsg(val:any) {
    this.oneWayMsg = val;
  }
}
