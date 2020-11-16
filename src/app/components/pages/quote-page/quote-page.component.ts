import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from '../../../models/quote-interface'
@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {
  quoteLoaded:Promise<boolean>
  quoteId
  quote
  constructor(
    private router:Router,
    private quotesService:QuotesService
  ) 
  { }

  ngOnInit(): void {
    this.quoteId = this.router.url.split('/').pop()
    this.quotesService.getQuote(this.quoteId)
    .subscribe((result:any) =>{

      this.quote = result.data
      this.quoteLoaded= Promise.resolve(true)
    })
  }
  

}
