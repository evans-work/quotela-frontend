import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote;
  @Output() notify:EventEmitter<string> = new EventEmitter()
  render = true
  id
  likes
  by
  backgroundColor
  textColor
  quoteText
  userId
  showOptions:boolean = false
  
  
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.quote._id
    this.likes = this.quote.likes
    this.by = this.quote.by
    this.backgroundColor = this.quote.backgroundColor
    this.textColor = this.quote.textColor
    this.quoteText= this.quote.quoteText
    this.userId = this.quote.userId
    this.showOptions = this.shouldShowOptons()
  }

  onClick(){
    this.router.navigateByUrl(`quote/${this.id}`)
  }

  onDelete(){
    this.render = false;
  }
  shouldShowOptons():boolean{
    if(AuthService.isLoggedIn() && AuthService.getId() == this.userId){
      return true
    }
    return false
  }
  onNotify(message)
  {
    this.notify.emit(message)
  }

}
