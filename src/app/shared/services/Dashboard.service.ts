

import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { APIResponse } from '../interfaces/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
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

  SearchPts(){

    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "User/GetAllPTs",this.GetHeader());
  }

  

 


  

}
