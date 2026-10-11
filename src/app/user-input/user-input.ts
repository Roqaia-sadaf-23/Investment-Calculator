import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-user-input',
  styleUrl: './user-input.css',
  templateUrl: './user-input.html',
})
export class UserInput {
  @Output() calculateResults = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();
  onSubmit() {
    this.calculateResults.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
  annualInvestment = '0';
  expectedReturn = '10';
  duration = '5';
  initialInvestment = '0';
}
