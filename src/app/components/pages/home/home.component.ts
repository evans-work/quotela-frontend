import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../../services/quotes.service';
import { Quote } from '../../../models/quote-interface'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notify:boolean = false
  message
  quotes = []
  isLoggedIn = AuthService.isLoggedIn()
  constructor(
    private quoteService:QuotesService
  ) 
  { 

  }

  ngOnInit(): void {
    this.quoteService.getQuotes()
    .subscribe((data:Quote[]) =>{
      
      //console.log('quotes: ',data)
      this.quotes = data
    })
    
    
    
  }
  onNotify(message){
    this.message = message
    this.notify = true
    const timeoutId = setTimeout(() => {
      this.notify = false
      clearTimeout(timeoutId)
    }, 5000);
  }

}
