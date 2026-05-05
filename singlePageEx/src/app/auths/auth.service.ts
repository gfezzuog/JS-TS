import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged: boolean = true

  constructor() { }

  isLogged(){
    return this.logged
  }
  
  login(username?: string, password?: string): boolean {
    if (username && password) {
      this.logged = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.logged = false;
  }

}
