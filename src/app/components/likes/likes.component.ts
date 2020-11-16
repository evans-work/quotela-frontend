import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() quoteId
  @Input() likes
  @Input() backgroundColor
  @Input() textColor
  @Output() notify:EventEmitter<string> = new EventEmitter()
  liked = false
  btnClass
  likesColor
  
  constructor(
    private quotesService:QuotesService
  ) { }

  onLike(){
    if(!AuthService.isLoggedIn()){
      this.notify.emit("Liking is a members only feature")
      return
    }
    if(! this.liked)
    {
      this.quotesService.updateLikes(this.quoteId,true)
      .subscribe((result:any)=>{
        if(result.status){
          this.btnClass = "full"
          this.liked = true
          this.likes++
          this.likesColor = this.textColor
          return
        }
      })
      
    }else
    {
      this.quotesService.updateLikes(this.quoteId,false)
      .subscribe((result:any)=>{
        if(result.status){
          this.btnClass="empty"
          this.liked= false
          this.likes--
          this.likesColor = this.backgroundColor
          return
        }
      })
     
    }
    
  }
  ngOnInit(): void {
    this.likesColor = this.backgroundColor
    this.btnClass = 'empty'
    if(!AuthService.isLoggedIn()){
      return
    }
    this.quotesService.getLike(this.quoteId)
    .subscribe((data:any) =>{
      this.liked = data.status
      
      if(this.liked){
        this.likesColor = this.textColor
        this.btnClass = "full"
      }
      })

  }

}
