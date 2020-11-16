import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  disabled:boolean = false
  submitClass =""
  loginForm
  errorMessage:string
  showError:boolean = false
  
  formData ={
    email:'',
    password:''
  }
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { 
    if(AuthService.isLoggedIn()){
      router.navigateByUrl('/')
    }
  }

  ngOnInit(): void 
  {
    this.loginForm = this.formBuilder.group(this.formData)

  }

  onSubmit(formData){
    console.log('login')
    this.disabled =true
    this.submitClass="disabled"
    this.authService.login(formData)
    .subscribe((result:any) =>{
      if(result.status){
        this.authService.setAuthData(result.data)
        location.replace(`${location.origin}`)
      }else{
        this.errorMessage = result.data
        this.showError = true
      }
      this.disabled =false
      this.submitClass="d"
      
    })


  }

}
