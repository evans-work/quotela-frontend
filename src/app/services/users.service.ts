import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ROOT_URL = "http://localhost:5000/users"
  constructor(
    private http:HttpClient
  ) { }
  
  getUser(id:string):Observable<any>{
    return this.http.get(`${this.ROOT_URL}/${id}`,) 
  }
}
