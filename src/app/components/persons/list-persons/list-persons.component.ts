import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persons } from 'src/app/interfaces/persons';
import { PersonService } from 'src/app/services/persons/person.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})

export class ListPersonsComponent implements OnInit {
  listPersons: Persons[];
  constructor(private modal: NgbModal, private service: PersonService, private toastr: ToastrService) {
    this.listPersons = [];
  }

  ngOnInit(): void {
    this.loadPeople();
  }

  openModal(){
    this.toastr.success("Hola", 'éxito');
    this.service.openModal();
  }

  loadPeople() {
    this.service.getAllPersons().subscribe(
      response => {
        this.listPersons = response;
      }, error => {
        alert(error.error)
      }

    )
  }

  deletePerson(id?:number){
    this.service.deletePerson(id).subscribe(
      response=>{
          alert("Registro eliminado con éxito");
      }, error=>{
        alert(error.error)
      }
    );
  }
}