import { Component, OnInit } from '@angular/core';
import { LookupsService } from '../lookups.service';

@Component({
  selector: 'app-lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.css']
})
export class LookupsComponent implements OnInit {

  lookups;

  constructor(private _lookupservice : LookupsService) { }

  ngOnInit() {
    this._lookupservice.getLookups()
      .subscribe(
        result =>{
          this.lookups = result;
        },
        error =>{
          console.log(error);
        }
      )
  }

}
