import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Quote } from '../models/quote-interface'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service';
import { retry,catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes: Observable<Quote[]>
  ROOT_URL = "http://localhost:5000"
  httpOptions = {
    headers:AuthService.isLoggedIn()? new HttpHeaders({
      'token': AuthService.getToken()
    }):{}
  }
  constructor(
    private http:HttpClient
  ) { }

  getQuotes(): Observable<Quote[]>{   
   this.quotes = this.http.get<Quote[]>(this.ROOT_URL+"/quotes")
    
    return this.quotes
  }

  postQuote(quote):Observable<any>{
    return this.http.post(this.ROOT_URL+"/quotes/",quote,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }
  updateQuote(quoteId:string,quote):Observable<any>{
    return this.http.put(`${this.ROOT_URL}/quotes/${quoteId}`,quote,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }
  deleteQuote(quoteId:string){
    this.http.delete(`${this.ROOT_URL}/quotes/${quoteId}`,this.httpOptions).subscribe((data:any) =>{
      //console.log(data)
    })
  }
  updateLikes(quoteId,increment:boolean):Observable<any>{
    const values = 
    {
      quoteId:quoteId
    }
    if(increment){
      return this.http.put(this.ROOT_URL+"/quotes/likes",values,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleErrors)
      )
    }
    else{
     
      return this.http.delete(`${this.ROOT_URL}/quotes/likes/${quoteId}`,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleErrors)
      )
    }
    
  }
  getLike(quoteId:string):Observable<any>{
    return this.http.get(`${this.ROOT_URL}/quotes/likes/${quoteId}`,this.httpOptions)
  }

  getQuote(quoteId:string): Observable<Quote>
  {
    return this.http.get<Quote>(`${this.ROOT_URL}/quotes/${quoteId}`)
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
