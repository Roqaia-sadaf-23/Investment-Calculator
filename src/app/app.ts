import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  imports: [Header, UserInput, InvestmentResults],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  resultsData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);

  // protected readonly title = signal('investment-calculator');
}
