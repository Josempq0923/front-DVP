import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  listUsers: Users[];
  
  constructor(private modal: NgbModal, private service: UserService, private toastr: ToastrService) {
    this.listUsers = [];
  }
  ngOnInit(): void {
    this.loadUsers();
  }

  openModal(userDTO?: Users) {
    this.service.openModal(userDTO);
  }

  loadUsers() {
    this.service.getAllUsers().subscribe(
      response => {
          this.listUsers = response;
      }, error => {
        alert(error.error)
      }

    )
  };

  deleteUser(id?:number){
    this.service.deleleUser(id).subscribe(
      response=>{
          alert("Usuario eliminado con éxito");
      }, error=>{
        alert(error.error)
      }
    );
  }

}
