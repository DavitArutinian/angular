import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,RouterOutlet,ReactiveFormsModule,HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  login: {username?: string, password?: string} = {};

  

  constructor(private fb: FormBuilder, private router: Router,  private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    const regInfo = localStorage.getItem('regInfo');
    if (regInfo) {
      const parsedRegInfo = JSON.parse(regInfo);
      console.log('Registration information retrieved:', parsedRegInfo);
    }
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const userData = localStorage.getItem(`registration_${email}`);
      if (userData) {
        const registrationData = JSON.parse(userData);
        if (registrationData.password === password) {
          this.authService.saveUserData(registrationData.firstName, registrationData.lastName);
          this.router.navigate(['welcome']).then(() => {
            window.location.reload();
        });
        } else {
          this.errorMessage = 'Incorrect password';
        }
      } else {
        this.errorMessage = 'User not found';
      }
    } else {
      console.log('Form is invalid');
      this.errorMessage = 'Please enter valid email and password';
    }
  }
}  