import { Component, OnInit } from '@angular/core';

// for regular form
import { NgForm } from '@angular/forms';

//FormBuilder
import {
  FormBuilder,
  FormControl
} from '@angular/forms';

// import service
import { YahooQuotesService } from '../../services/yahoo-quotes.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  providers: [NgForm, YahooQuotesService]
})
export class SimpleFormComponent implements OnInit {

  tickers = [];

  constructor(private yqs: YahooQuotesService) { }

  ngOnInit() {
  }

  purchase (form: NgForm) {
    console.log(form.value);
    console.log(form.value.contact.firstname);
    this.yqs.getStockQuote(form.value.contact.firstname).subscribe(response => {
      if (!Array.isArray(response.json().query.results.quote))
        this.tickers = [response.json().query.results.quote]; 
      else 
        this.tickers = response.json().query.results.quote;

      console.log(this.tickers);
    });
  }
}
