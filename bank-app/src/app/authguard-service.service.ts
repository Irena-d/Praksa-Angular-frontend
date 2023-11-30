import { Injectable } from '@angular/core';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
       status = true;
    }
      else {
       status = false;
       }
    return status;
    }

  logout() :void {
    localStorage.setItem('isLoggedIn', 'false');

  }
  
}



