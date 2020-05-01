import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user ={};

  constructor(private _authService : AuthService,
              private _router : Router) { }

  ngOnInit() {
  }

  onRegisterClick(){
    console.log(this.user);
    this._authService.registration(this.user)
      .subscribe(
        result =>{
          sessionStorage.setItem('authtoken',result.token);
          this._router.navigateByUrl('/lookups')
        },
        error => {
          console.log(error);
        }
      )
  }

}
