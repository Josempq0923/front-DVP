import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddEditUsersComponent } from './components/users/add-edit-users/add-edit-users.component';
import { AddEditPersonsComponent } from './components/persons/add-edit-persons/add-edit-persons.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { ListPersonsComponent } from './components/persons/list-persons/list-persons.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'persons', component: ListPersonsComponent},
  {path: 'add-user', component: AddEditUsersComponent},
  {path: 'add-person', component: AddEditPersonsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
