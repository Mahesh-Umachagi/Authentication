import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registrationurl = "http://localhost:3000/auth/register";
  private _loginurl = "http://localhost:3000/auth/login";
  private _projectsurl = "http://localhost:3000/auth/projects";
  private _projectdetailsurl = "http://localhost:3000/auth/projects/";
  private _premiumprojectsurl = "http://localhost:3000/auth/premiumprojects";
  private _putreviewurl = "http://localhost:3000/auth/projects/"

  constructor(private _http : HttpClient) { }

  registration(user){
    return(this._http.post<any>(this._registrationurl,user))
  }

  getprojects(){
    return(this._http.get<any>(this._projectsurl))
  }

  getprojectdetails(pid){
    return(this._http.get<any>(this._projectdetailsurl+pid))
  }

  getpremiumprojects(){
    return(this._http.get<any>(this._premiumprojectsurl))
  }

  putReview(id,review){
    return(this._http.put<any>(this._putreviewurl+id,review));
  }

  login(user){
    return(this._http.post<any>(this._loginurl,user));
  }

  isLoggedIn(){
    return !!sessionStorage.getItem('authtoken')
  }


}
