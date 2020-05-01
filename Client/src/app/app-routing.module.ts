import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { PaidprojectsComponent } from './paidprojects/paidprojects.component';
import { AuthGuard } from './auth.guard';
import { ProjectcompletedetailsComponent } from './projectcompletedetails/projectcompletedetails.component';
import { LookupsComponent } from './lookups/lookups.component';
import { LookupdetailsComponent } from './lookupdetails/lookupdetails.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'lookups',
    component : LookupsComponent
  },
  {
    path : 'lookupdetails/:id',
    component : LookupdetailsComponent
  },
  {
    path : 'projects',
    component : ProjectsComponent
  },
  {
    path : 'paidprojects',
    component : PaidprojectsComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'projectcompletedetails/:id',
    component : ProjectcompletedetailsComponent
  },
  {
    path : '**',
    component : LookupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
