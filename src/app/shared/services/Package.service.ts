import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { APIResponse } from '../interfaces/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
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

Get(){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "Package/Get",this.GetHeader());
}

GetByKey(PackageID:string){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "Package/GetByKey?PackageID="+PackageID,this.GetHeader());
}


  GetBioQuestions(){
    return this.http.get<any>(AppSettings.PT_API_ENDPOINT + "Package/GetQuestions",this.GetHeader());
  }

  AddPackage(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"Package/Add",Param,this.GetHeader());
  }

  UpdatePackage(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"Package/Update",Param,this.GetHeader());
  }

  DeletePackage(Param:any){
    return this.http.post<any>(AppSettings.PT_API_ENDPOINT+"Package/Delete",Param,this.GetHeader());
  }
}
