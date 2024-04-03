import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';
import { contact_apiURL } from '../Models/Config';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  showThanks = new Subject<boolean>();

  constructor(private http : HttpClient) { }

  InsertQueryDetails(data : any) : Observable<any>{
    return this.http.post<any>(contact_apiURL + 'InsertQuery',data);
  }
}
