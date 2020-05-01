import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  private _lookupsurl = "http://localhost:3000/lookups/"
  private _putreviewurl = "http://localhost:3000/lookups/"

  constructor(private _http : HttpClient) { }

  getLookups(){
    return(this._http.get<any>(this._lookupsurl))
  }

  getLookupDetails(id){
    return(this._http.get<any>(this._lookupsurl+id));
  }

  putReview(id,review){
    return(this._http.put<any>(this._putreviewurl+id,review));
  }
}
