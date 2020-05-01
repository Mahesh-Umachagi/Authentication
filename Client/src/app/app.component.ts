import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _authservice : AuthService,private router : Router){}

  title = 'client';

  onLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/projects')
  }
}
