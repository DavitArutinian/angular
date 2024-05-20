import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { Footer2Component } from '../footer2/footer2.component';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from '../header2/header2.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegComponent } from '../reg/reg.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    Header2Component,
    Footer2Component,
    RegComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  title = 'skills';
  userName: string = '';

  constructor(public authService: AuthService,private router: Router) {}
  
  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user && user.firstName && user.lastName) {
        this.userName = `Welcome, ${user.firstName} ${user.lastName}`;
      } else {
        this.userName = 'Welcome'; // Show "Welcome" if the user is not logged in or user data is incomplete
      }
    });
  }
  

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
  });
}
}