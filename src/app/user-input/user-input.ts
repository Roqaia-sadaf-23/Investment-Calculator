import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInputModel } from './investment-input-model';

@Component({
  imports: [FormsModule],
  selector: 'app-user-input',
  styleUrl: './user-input.css',
  templateUrl: './user-input.html',
})
export class UserInput {
  calculateResults = output<investmentInputModel>();
  onSubmit() {
    this.calculateResults.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('10');
    this.duration.set('5');
  }
  annualInvestment = signal('0');
  expectedReturn = signal('10');
  duration = signal('5');
  initialInvestment = signal('0');
}
