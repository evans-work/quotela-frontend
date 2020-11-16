import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { QuotesService } from 'src/app/services/quotes.service';
@Component({
  selector: 'app-quote-options',
  templateUrl: './quote-options.component.html',
  styleUrls: ['./quote-options.component.css']
})
export class QuoteOptionsComponent implements OnInit {
  @Input() quoteId
  @Output() deleteQuote:EventEmitter<any> =new EventEmitter
  constructor(
    private router:Router,
    private quotesService:QuotesService
  ) { }

  ngOnInit(): void {
    
  }

  onEdit(){
    this.router.navigateByUrl(`/quote/update/${this.quoteId}`)
  }
  onDelete(){
    this.deleteQuote.emit()
    this.quotesService.deleteQuote(this.quoteId)
  
  }

}
