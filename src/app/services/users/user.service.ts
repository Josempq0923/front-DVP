import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AddEditUsersComponent } from 'src/app/components/users/add-edit-users/add-edit-users.component';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/interfaces/users';
import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private header = new HttpHeaders();
  public title = "";
  user?:Users = {};

  constructor(private modal: NgbModal, private http: HttpClient, private loginService:LoginServiceService){
    this.header = new HttpHeaders({'Authorization':'Bearer ' + this.loginService.GetTokenStorage()});
  }

  openModal(userDTO?: Users){
    this.user = userDTO;
    this.title = userDTO == null ? this.title = "Agregar usuario" :this.title = "Editar usuario";
    const modalRef: NgbModalRef = this.modal.open(AddEditUsersComponent);
  }

  getAllUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiUrl}/api/Users/GetAllUsers`, {headers : this.header});
  }

  saveUser(userDTO: Users){
    return this.http.post<Users>(`${this.apiUrl}/api/Users`, userDTO, {headers : this.header});
  };

  deleleUser(id?:number){
    return this.http.delete<void[]>(`${this.apiUrl}/api/Users?id=` + id, {headers : this.header});
  }
}
