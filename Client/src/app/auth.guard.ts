import { Injectable, Injector } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private injector : Injector,private router : Router){}

  canActivate(): boolean {
    let authservice = this.injector.get(AuthService);
    
    if(authservice.isLoggedIn())
      return true;
    else{
      this.router.navigateByUrl('/login');
      return false;
    }    
  }
  
}
