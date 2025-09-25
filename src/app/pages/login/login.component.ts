import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  isLoading = false;

  constructor(private router: Router) {}

  onLogin() {
    this.isLoading = true;
    // TODO: Implement login logic
    console.log('Login attempt:', this.loginData);
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // Navigate to home page on successful login
      this.router.navigate(['/home']);
    }, 1000);
  }
}