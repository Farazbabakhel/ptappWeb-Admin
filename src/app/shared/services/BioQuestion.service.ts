import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { APIResponse } from '../interfaces/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class BioQuestionService {
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
GetQuestionByKey(){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "PTBio/GetByKey",this.GetHeader());
  }
  GetAllBioQuestions(){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "PTBio/Get",this.GetHeader());
  }
  GetBioQuestions(){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "PTBio/GetQuestions",this.GetHeader());
  }
  AddUserBioAnswer(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"User/AddUserBioAnswer",Param,this.GetHeader());
  }
  AddBioQuestion(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"PTBio/Add",Param,this.GetHeader());
  }
  UpdateBioQuestion(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"PTBio/Update",Param,this.GetHeader());
  }
  DeleteBioQuestion(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"PTBio/Delete",Param,this.GetHeader());
  } 
}
