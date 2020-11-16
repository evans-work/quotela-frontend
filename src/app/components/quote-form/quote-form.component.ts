import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { QuotesService } from '../../services/quotes.service';
import { QuoteFormData } from '../../models/quote-form-data-interface'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterBtnComponent } from '../register-btn/register-btn.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() action:string
  @Input() quoteId:string
  @Input() formData:QuoteFormData ={
    quoteText:'',
    by:'',
    backgroundColor:'',
    textColor:''
  }
  disabled:boolean
  submitClass:string =""
  quoteForm
  successMessage:string
  showSuccess:boolean = false
  errorMessage:string
  showError:boolean = false
  constructor(
    private formBuilder:FormBuilder,
    private quotesService:QuotesService,
    private router:Router,
    ) 
    {
      
      if(!AuthService.isLoggedIn()){
        router.navigateByUrl('/login')
      }
    }
   
  ngOnInit(): void {
    //console.log('form data',this.formData)
    this.quoteForm = this.formBuilder.group(this.formData)
  }
  onSubmit(formData){
    this.disabled= true
    this.submitClass = "disabled"
    switch (this.action) {
      case 'create':
        this.createQuote(formData)
        break;
      case 'update':
        this.updateQuote(formData)
        break;
      default:
        alert('unknown action')
        break;
    }
    
  }
  
  createQuote(quote:QuoteFormData){
    this.quotesService.postQuote(quote)
    .subscribe((result:any)=>{
      if(result.status){
        this.successMessage = "Quote created successfully"
        this.showError = false
        this.showSuccess = true
      }else{
        this.errorMessage = result.data
        this.showSuccess= false
        this.showError = true
      }
      this.disabled= false
    this.submitClass = ""
    })
  }

  updateQuote(quote){
    this.quotesService.updateQuote(this.quoteId,quote)
    .subscribe((result:any)=>{
      if(result.status){
        this.successMessage = "Quote updated successfully"
        this.showError = false
        this.showSuccess = true
      }else{
        this.errorMessage = result.data
        this.showSuccess= false
        this.showError = true
      }
      this.disabled= false
      this.submitClass = ""
    })
  }
}
