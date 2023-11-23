import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiUrl = environment.apiUrl;
  private authUserKey = "authUser";

  constructor(private httpClient: HttpClient) { }

  login(loginDTO: Login): Observable<any> {
    const headersJWT = new HttpHeaders({
      'X-Requires-JWT': 'false',
    });

    const options = {headers: headersJWT};

    return this.httpClient.post(`${this.apiUrl}/api/Login`, loginDTO, options);
  }

  GetTokenStorage(){
    const localStorageData = localStorage.getItem("authUser");
    if(!!localStorageData){
      var info = JSON.parse(localStorageData);
      return info.token;
    }else{
      return null;
    }
  };
}

