import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-user-input',
  styleUrl: './user-input.css',
  templateUrl: './user-input.html',
})
export class UserInput {
  onSubmit() {
    console.log('submitted');
    console.log('Initial Investment:', this.initialInvestment);
    console.log('Annual Investment:', this.annualInvestment);
    console.log('Expected Return:', this.expectedReturn);
    console.log('Duration:', this.duration);
  }
  annualInvestment: '0' | undefined;
  expectedReturn: '0' | undefined;
  duration: '5' | undefined;
  initialInvestment: '10' | undefined;
}
