import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  disabled:boolean = false
  errorMessage:string
  submitClass:string = ""
  showError:boolean = false
  registerForm
  formData ={
    firstName:"",
    lastName: "",
    email:'',
    password:'',
    confirmPassword:''
  }
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void 
  {
    this.registerForm = this.formBuilder.group(this.formData)

  }

  onSubmit(formData){
    this.disabled = true
    this.submitClass="disabled"
    console.log('register')
    this.authService.register(formData)
    .subscribe((result:any) =>{
      if(result.status){
        this.authService.setAuthData(result.data)
        location.replace(`${location.origin}`)
      }else{
        console.log(result.data)
        this.errorMessage=result.data
        this.showError = true
      }
      this.disabled = false
      this.submitClass = ""
      
    })
    

  }

}
