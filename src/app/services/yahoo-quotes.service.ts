import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class YahooQuotesService {

  constructor(private _http: Http) {};

   private getQuoteUrl(ticker) {
	   var tickers = ticker.sort().map(function(t) {
						return "'" + t + "'";
					}).join(',');
        var _url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(" + tickers.substr(0,tickers.length-1) +  ")&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
        console.log(_url);
        return _url; 
    };

    getStockQuote() {
        return this._http.get(
          this.getQuoteUrl(['TLT', ,'QCOM','NKE', 'UNP','KHC','UA','AAPL','GPC','WFT','ALL','CYBR','BMS','ONEQ']))
    };

}
