import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { LoginServiceService } from '../login/login-service.service';
import { AddEditPersonsComponent } from 'src/app/components/persons/add-edit-persons/add-edit-persons.component';
import { Persons } from 'src/app/interfaces/persons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = environment.apiUrl;
  private header = new HttpHeaders();
  
  constructor(private modal: NgbModal, private http: HttpClient, private loginService:LoginServiceService) { 
    this.header = new HttpHeaders({'Authorization':'Bearer ' + this.loginService.GetTokenStorage()});
  }

  openModal(){
    const modalRef: NgbModalRef = this.modal.open(AddEditPersonsComponent);
  }

  getAllPersons(): Observable<Persons[]>{
    return this.http.get<Persons[]>(`${this.apiUrl}/api/Persons/GetAllPersons`, {headers : this.header});
  }

  savePerson(personDTO: Persons){
    return this.http.post<Persons>(`${this.apiUrl}/api/Persons`, personDTO, {headers : this.header});
  };

  deletePerson(id?:number){
    return this.http.delete<void[]>(`${this.apiUrl}/api/Persons?id=` + id, {headers : this.header});
  }
}
