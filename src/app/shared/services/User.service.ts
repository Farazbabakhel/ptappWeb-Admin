

import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { APIResponse } from '../interfaces/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient: HttpClient;
  

  constructor(
    handler: HttpBackend,
    private http: HttpClient) {
      this.httpClient = new HttpClient(handler);
  }

GetHeader(){
  var httpOptions:any={}
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+localStorage.getItem("token")
  });

       httpOptions = {
        headers: headers_object
      };
      return httpOptions;
}

GetUserProfile(){

    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "User/GetProfile",this.GetHeader());
  }

  UpdateUserProfile(Param:any){
        return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"User/UpdateProfile",Param,this.GetHeader());
  }

  UpdateUserTags(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"User/AddTags",Param,this.GetHeader());
}

GetTags(){
  return this.http.get<any>(AppSettings.PT_API_ENDPOINT+"Tag/Tags",this.GetHeader());
}

  

  

 


  

}
