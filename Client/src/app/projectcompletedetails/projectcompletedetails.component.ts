import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-projectcompletedetails',
  templateUrl: './projectcompletedetails.component.html',
  styleUrls: ['./projectcompletedetails.component.css']
})
export class ProjectcompletedetailsComponent implements OnInit {

  id;
  project;
  review = {};

  constructor(private route: ActivatedRoute,
    private _auth: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
      this._auth.getprojectdetails(params.id)
        .subscribe(
          result => {
            this.project = result;
          },
          error => {
            console.log(error);
          }
        )
    });
  }

  onSubmit() {
    this._auth.putReview(this.id, this.review)
      .subscribe(
        result => {
          this._auth.getprojectdetails(this.id)
            .subscribe(
              result => {
                this.project = result;
              },
              error => {
                console.log(error);
              }
            )
        },
        error => {
          console.log(error);
        }
      )
  }

}
