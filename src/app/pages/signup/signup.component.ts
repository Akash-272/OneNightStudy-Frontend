import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;
  passwordsMatch = true;

  constructor(private router: Router) {}

  onSignup() {
    // Check if passwords match
    this.passwordsMatch = this.signupData.password === this.signupData.confirmPassword;
    
    if (!this.passwordsMatch) {
      return;
    }

    this.isLoading = true;
    // TODO: Implement signup logic
    console.log('Signup attempt:', this.signupData);
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // Navigate to home page on successful signup
      this.router.navigate(['/home']);
    }, 1000);
  }

  checkPasswordMatch() {
    this.passwordsMatch = this.signupData.password === this.signupData.confirmPassword;
  }
}