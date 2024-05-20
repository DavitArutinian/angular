import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    this.currentUserSubject = new BehaviorSubject<any>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  saveUserData(firstName: string, lastName: string): void {
    localStorage.setItem('currentUser', JSON.stringify({ firstName, lastName }));
    this.currentUserSubject.next({ firstName, lastName });
  }

  getFirstName(): string {
    return this.currentUserValue?.firstName || '';
  }

  getLastName(): string {
    return this.currentUserValue?.lastName || '';
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
