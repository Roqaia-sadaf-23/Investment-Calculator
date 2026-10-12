import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInputModel } from './investment-input-model';

@Component({
  imports: [FormsModule],
  selector: 'app-user-input',
  styleUrl: './user-input.css',
  templateUrl: './user-input.html',
})
export class UserInput {
  @Output() calculateResults = new EventEmitter<investmentInputModel>();
  onSubmit() {
    this.calculateResults.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
  }
  annualInvestment = signal('0');
  expectedReturn = signal('10');
  duration = signal('5');
  initialInvestment = signal('0');
}
