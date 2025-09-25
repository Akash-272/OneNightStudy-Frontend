import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  onLogin() {
    this.isLoading = true;
    // TODO: Implement login logic
    console.log('Login attempt:', this.loginData);
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // Handle login success/error
    }, 1000);
  }
}