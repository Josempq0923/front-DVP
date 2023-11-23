import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { ListPersonsComponent } from './components/persons/list-persons/list-persons.component';
import { AddEditUsersComponent } from './components/users/add-edit-users/add-edit-users.component';
import { AddEditPersonsComponent } from './components/persons/add-edit-persons/add-edit-persons.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import {  NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUsersComponent,
    ListPersonsComponent,
    AddEditUsersComponent,
    AddEditPersonsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
