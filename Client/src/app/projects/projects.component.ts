import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectlist;

  constructor(private _auth : AuthService) { }

  ngOnInit() {
    this._auth.getprojects()
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
