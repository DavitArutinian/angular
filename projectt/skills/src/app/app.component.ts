import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { HeaderComponent } from './components/header/header.component';
import { Header2Component } from './components/header2/header2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegComponent } from './components/reg/reg.component';
import { AuthService } from './services/auth.service';

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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'skills';


}
