import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-paidprojects',
  templateUrl: './paidprojects.component.html',
  styleUrls: ['./paidprojects.component.css']
})
export class PaidprojectsComponent implements OnInit {
  projectlist ;

  
  constructor(private _auth : AuthService) { }

  ngOnInit() {
    this._auth.getpremiumprojects()
      .subscribe(
        result => {
          this.projectlist = result;
        },
        error =>{
          console.log(error);
        }
      )
  }

}
