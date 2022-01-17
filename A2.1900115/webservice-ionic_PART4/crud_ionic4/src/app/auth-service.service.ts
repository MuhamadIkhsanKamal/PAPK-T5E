import { Injectable } from '@angular/core';
// manambahkan
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost/webservice-ionic_PART4";

@Injectable
  
  
  ({
  providedIn: 'root'
})
export class AuthServiceService {

  
  constructor(private http: HttpClient) { }

  Get_Data(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

  Post_Data(type,credentials): Observable<any>{
    return this.http.post(`${apiUrl}/${type}`,credentials,httpOptions);
  }
}
