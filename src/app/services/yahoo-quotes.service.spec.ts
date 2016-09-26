/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YahooQuotesService } from './yahoo-quotes.service';

describe('Service: YahooQuotes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YahooQuotesService]
    });
  });

  it('should ...', inject([YahooQuotesService], (service: YahooQuotesService) => {
    expect(service).toBeTruthy();
  }));
});
