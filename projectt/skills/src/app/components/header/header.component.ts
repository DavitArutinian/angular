import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    address = '589 5th Ave, NY 10024, USA';
    email = 'info@skillgrodemo.com';
    phoneNumber = '+123 599 8989';
  
}
