import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  showThanks = new Subject<boolean>();

  constructor(private http : HttpClient) { }

  InsertQueryDetails(data : any) : Observable<any>{
    return this.http.post<any>(environment.contact_apiURL + 'InsertQuery',data);
  }
}
