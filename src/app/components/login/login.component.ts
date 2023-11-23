import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private authUserKey = "";
  formLogin!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, protected router: Router, private service: LoginServiceService) {
    this.authUserKey = "authUser";
  }

  ngOnInit(): void {
    this.InitialFormLogin();
  }

  InitialFormLogin() {
    this.formLogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  };

  Login() {
    const userLogin: Login = {
      userName: this.formLogin.value.user,
      password: this.formLogin.value.password
    };

    this.service.login(userLogin)
      .subscribe(
        response =>{
          localStorage.setItem(this.authUserKey, JSON.stringify(response));
          if(!!response){
            this.router.navigate(["/users"]);
          };
        },
        error => {
          alert(error.error);
        }
      );
  }
}
