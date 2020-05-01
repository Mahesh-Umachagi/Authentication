import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { LookupsService } from '../lookups.service';

@Component({
  selector: 'app-lookupdetails',
  templateUrl: './lookupdetails.component.html',
  styleUrls: ['./lookupdetails.component.css']
})
export class LookupdetailsComponent implements OnInit {
  
  id;
  lookup;
  review = {};

  constructor(private _activatedroute : ActivatedRoute,
              private _lookupservice : LookupsService) { }

  ngOnInit() {
    this.id = this._activatedroute.params.subscribe((params)=>{
      this.id = params.id;
      this._lookupservice.getLookupDetails(this.id)
        .subscribe(
          result =>{
            this.lookup = result;
          },
          error =>{
            console.log(error);
          }
        )
    })
  }

  onReviewSubmit(){
    console.log(this.review);
    this._lookupservice.putReview(this.lookup.lookupid,this.review)
      .subscribe(
        result =>{
          this._lookupservice.getLookupDetails(this.lookup.lookupid)
            .subscribe(
              result =>{
                this.lookup = result;
              },
              error =>{
                console.log(error);
              }
            )
        },
        error =>{
          console.log(error);
        }
      )
  }

}
