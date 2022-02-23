import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiURL = "http://localhost:8081/api";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<any> {
    return this.httpClient.get<[]>(this.apiURL + '/events/')
  }
   
  create(post:any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
  }  
   
  find(id:any): Observable<any> {
    return this.httpClient.get(this.apiURL + '/events/' + id)
  }
   
  update(id:any, post:any): Observable<any> {
    return this.httpClient.put(this.apiURL + '/events/update-event/' + id, JSON.stringify(post), this.httpOptions)
  }
   
  delete(id:any){
    return this.httpClient.delete(this.apiURL +'/events/'+ id, this.httpOptions)
  }
}
