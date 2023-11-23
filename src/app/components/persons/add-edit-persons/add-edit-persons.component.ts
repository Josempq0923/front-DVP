import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persons } from 'src/app/interfaces/persons';
import { PersonService } from 'src/app/services/persons/person.service';

@Component({
  selector: 'app-add-edit-persons',
  templateUrl: './add-edit-persons.component.html',
  styleUrls: ['./add-edit-persons.component.scss']
})
export class AddEditPersonsComponent {
  title="Editar";
  person:Persons = {};

  form: FormGroup;

  constructor(private service: PersonService, 
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private modal: NgbActiveModal){
    this.form = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      identificationNumber:['', Validators.required],
      typeIdentification:['', Validators.required],
      email:['', Validators.required]
    });
  }

  closeModal(){
    this.modal.close();
  }

  add_edit_person(){
    const personDTO: Persons = { 
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      identificationNumber: this.form.value.identificationNumber,
      typeIdentification: this.form.value.typeIdentification,
      email: this.form.value.email,
      fullName: this.form.value.firstName + ' ' + this.form.value.lastName,
      fullIdentification: this.form.value.typeIdentification + ' ' + this.form.value.identificationNumber,
    };

    this.service.savePerson(personDTO).subscribe(
      response => {
        alert("Registro guardado con éxito")
        this.closeModal();
        this.service.getAllPersons();
      }, error => {
        alert(error.error)
      }

    )
  }
}
