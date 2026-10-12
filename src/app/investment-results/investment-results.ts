import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { InvestmentService } from './investmentService';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investment-results',
  styleUrl: './investment-results.css',
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  private investment = inject(InvestmentService);

  get resultsData() {
    return this.investment.resultsData;
  }
}
