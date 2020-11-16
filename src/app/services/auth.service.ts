import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { retry,catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Root_URL = "http://localhost:5000/auth"
  static token = localStorage.getItem('token')
  static firstName = localStorage.getItem('firstName')
  static lastName = localStorage.getItem('lastName')
  constructor(
    private http:HttpClient
  ) { }

  login(credentials):Observable<any>{
    return this.http.post(`${this.Root_URL}/login`,credentials)
    .pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }
  register(userData):Observable<any>{
    return this.http.post(`${this.Root_URL}/register`,userData)
    .pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  static isLoggedIn():boolean{
    if(this.getToken()) 
    {
      return true
    }else{
      return false
    }
    
  }
  static getToken():string{
    return this.token
  }
  static setToken(value){
    this.token = value
  }
  static getId(){
    return localStorage.getItem('id')
  }
  static logout():void{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    this.setToken(null) 
    location.reload()

  }
  setAuthData(data){
    if(data.token){
      localStorage.setItem('token',data.token)
      localStorage.setItem("firstName",data.firstName)
      localStorage.setItem('lastName',data.lastName)
      localStorage.setItem('id',data.id)
    } 

  }
  handleErrors(error) {
    if(error.error instanceof ErrorEvent){
      return [{status:false,data:"unable to process your request please check your connection and try again"}] 
    }else{
      let errorMessage = null
      if(error.error.data){
        errorMessage = error.error.data
      }else{
        errorMessage = "Could not complete your request.Please check your connection and try again"
      }
      return [{status:false,data: errorMessage}]
    }
  }
}
