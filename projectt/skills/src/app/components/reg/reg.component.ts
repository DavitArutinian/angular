import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule,NgIf],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})

export class RegComponent implements OnInit {

  regForm!: FormGroup;
  submitted = false;
  successMessage: string | null = null;


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}


  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    },this.passwordMatch);
   
    }
    passwordMatch(rf: any) {
      let password = rf.controls['password'].value;
      let confirmPassword = rf.controls['confirmPassword'].value;
      if (password === confirmPassword) {
        return null
      } else {
        return {
        'passwordsMatch': true  
        }
      }
    }
    submit() {
      this.submitted = true;
      if (this.regForm.valid) {
        const registrationData = this.regForm.value;
        localStorage.setItem(`registration_${registrationData.email}`, JSON.stringify(registrationData));
        console.log('You have successfully registered', registrationData);
        this.successMessage = 'You have successfully registered';
        this.regForm.reset();
        this.submitted = false;
        this.router.navigate(['login']).then(() => {
          window.location.reload();
      });
      } else {
        console.log('Form is invalid');
      }
    }
  }
