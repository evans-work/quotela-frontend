import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { QuotesService } from '../../../services/quotes.service'
import { Quote } from '../../../models/quote-interface'
import { promise } from 'protractor';

@Component({
  selector: 'app-update-quote-page',
  templateUrl: './update-quote-page.component.html',
  styleUrls: ['./update-quote-page.component.css']
})
export class UpdateQuotePageComponent implements OnInit {
  quoteLoaded:Promise<boolean>
  quoteId:string
  action:string ="update"
  formData

  constructor(
    private router:Router,
    private quoteService:QuotesService
  ) { }

  ngOnInit(): void {
    this.quoteId = this.router.url.split('/').pop()
    this.quoteService.getQuote(this.quoteId)
    .subscribe((result:any) =>{
      const quote = result.data
      this.formData = 
      {
        quoteText: quote.quoteText,
        by:quote.by,
        backgroundColor:quote.backgroundColor,
        textColor:quote.textColor
      }
      this.quoteId = quote._id
      
      this.quoteLoaded = Promise.resolve(true)
    })
  }

}
