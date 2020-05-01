import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  @Input() project;

  // project = { "_id":"5e44ec0c08dd4201b01851d3",
  //             "projectid":2,
  //             "name":"Office automation",
  //             "ratings":4,
  //             "reviews":[
  //                         { "name":"Anusha",
  //                           "ratings":4,
  //                           "review":"Good Mom"
  //                         },
  //                         { "name":"Advika",
  //                           "ratings":5,
  //                           "review":"Good girl"
  //                         }
  //                       ]
  //           };


  private pdUrl = "/projectcompletedetails/"

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onProjectDetailsClick(){
    this.router.navigateByUrl(this.pdUrl+this.project.projectid);
  }

}
