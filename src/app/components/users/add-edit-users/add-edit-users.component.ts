import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.scss']
})

export class AddEditUsersComponent {
  title = "";
  user:Users ={};

  form: FormGroup;

  constructor(private service: UserService, private formBuilder: FormBuilder, private modal: NgbActiveModal,
    private toastr:ToastrService) {
    this.title = service.title;
    this.user = this.service.user || {};
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  };

  closeModal(){
    this.modal.close();
  }

  loadInfo(){
    if(this.user != null){
      console.log(this.user);
      this.form.setValue({
        userName: this.user.userName
      });
    }
  }

  add_edit_user() {
    var password = this.form.value.password;
    var confirmPassword = this.form.value.confirmPassword;

    if (password != confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    const userDTO: Users = { 
      userName: this.form.value.userName,
      password: password,
    };

    this.service.saveUser(userDTO).subscribe(
      response => {
        this.toastr.success("Usuario creado con éxito", "Exito")
        this.closeModal();
      }, error => {
        alert(error.error)
      }
    )
  };

}
