import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(private _authservice : AuthService,private _router : Router) { }

  ngOnInit() {
  }

  onLoginClick(){
    this._authservice.login(this.user)
      .subscribe(
        result=>{
          sessionStorage.setItem('authtoken',result.token);
          this._router.navigateByUrl('/lookups');
        },
      )

  }

}
