import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { PaidprojectsComponent } from './paidprojects/paidprojects.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ProjectcompletedetailsComponent } from './projectcompletedetails/projectcompletedetails.component';
import { LookupsComponent } from './lookups/lookups.component';
import { LookuppanelComponent } from './lookuppanel/lookuppanel.component';
import { LookupsService } from './lookups.service';
import { LookupdetailsComponent } from './lookupdetails/lookupdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PaidprojectsComponent,
    LoginComponent,
    RegisterComponent,
    ProjectdetailsComponent,
    ProjectcompletedetailsComponent,
    LookupsComponent,
    LookuppanelComponent,
    LookupdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthService,LookupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
