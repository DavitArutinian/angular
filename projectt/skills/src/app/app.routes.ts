import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegComponent } from './components/reg/reg.component';
import { EventsComponent } from './components/events/events.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CoursesComponent } from './components/courses/courses.component';





export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: 'reg', component: RegComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'events', component: EventsComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'courses', component: CoursesComponent },

];

