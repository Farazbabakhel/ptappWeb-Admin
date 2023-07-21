import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { APIResponse } from '../interfaces/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class BioQuestionOptionService {
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

GetBioQuestionOptionByKey(optionID:string){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "PTBioOption/GetByKey?optionID="+optionID,this.GetHeader());
  }

  GetBioQuestionOption(){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "PTBioOption/Get",this.GetHeader());
  }

  GetOptionByQuestionID(questionID:string){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT+"PTBioOption/GetByQuestionID?questionID="+questionID,this.GetHeader());
  }




  AddOption(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"PTBioOption/Add",Param,this.GetHeader());
  }
  UpdateOption(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"PTBioOption/Update",Param,this.GetHeader());
  } 

  DeleteOption(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"PTBioOption/Delete",Param,this.GetHeader());
  } 


  

  

}
