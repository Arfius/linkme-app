import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Cliente } from "../models/cliente"; 

@Injectable()
export class LinkmeService {
  
  private urlLogin = "http://localhost:8080/login";
  private urlList = "http://localhost:8080/listcustomers";
  private urlSave = "http://localhost:8080/savejson";

  constructor(private http: HttpClient) { }
  private user:any=null;
  
  setUser(data)
  {
    this.user=data;
  }

  getAuth()
  {
    if(this.user.accessToken!=null)
      return true;
    else
      return false;
  }

  login(data): Observable<any> {
    return  this.http.post<any>(this.urlLogin, data);
  }

  download(): Observable<any> {
    return  this.http.get<any>(this.urlList);
  }

  save(data:Array<Cliente>): Observable<any> {
    return  this.http.post<Array<Cliente>>(this.urlSave,data);
  }

}
