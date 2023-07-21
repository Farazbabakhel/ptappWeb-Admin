import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient: HttpClient;

  constructor(
    handler: HttpBackend,
    private http: HttpClient) {
      this.httpClient = new HttpClient(handler);
  }

  Login(Param:any){
    return this.httpClient.post<any>(AppSettings.PT_API_ENDPOINT+"Account/Login",Param);
  }

  ForgetPassword(Param:any){
    return this.httpClient.post<any>(AppSettings.PT_API_ENDPOINT+"Account/ForgetPassword",Param);
  }

  ResetPasswordRequestValidate(Token:any){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "Account/ResetPasswordRequestValidate?token="+Token);
  }
  
  ResetPassword(Param:any){
    return this.httpClient.post<any>(AppSettings.PT_API_ENDPOINT+"Account/ResetPassword",Param);
  }

}
