import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private httpClient: HttpClient;

  constructor(
    handler: HttpBackend,
    private http: HttpClient) {
      this.httpClient = new HttpClient(handler);
  }

  Signup(Param:any){
    return this.httpClient.post<any>(AppSettings.PT_API_ENDPOINT+"Account/SignupClient",Param);
  }

  VerifyEmail(Param:any){
    return this.httpClient.post<any>(AppSettings.PT_API_ENDPOINT+"Account/VerifyEmail",Param);
  }

  GenerateOTP(Param:any){
    return this.httpClient.post<any>(AppSettings.PT_API_ENDPOINT+"Account/GenerateOTP",Param);
  }

  

}
