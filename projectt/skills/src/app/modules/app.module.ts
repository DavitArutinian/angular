import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { Footer2Component } from '../components/footer2/footer2.component';
import { HeaderComponent } from '../components/header/header.component';
import { Header2Component } from '../components/header2/header2.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RegComponent } from '../components/reg/reg.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { EventsComponent } from '../components/events/events.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
     LoginComponent,
     HeaderComponent,
     FooterComponent,
     NavbarComponent,
     Header2Component,
     Footer2Component,
     RegComponent,
     HttpClientModule,
     EventsComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClient
  ],
  providers: [AuthService,EventService],
  exports: [LoginComponent,EventsComponent,RegComponent]
})
export class SharedModule {

}
export class RegModule { }
