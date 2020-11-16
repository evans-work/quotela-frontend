import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-btn',
  templateUrl: './register-btn.component.html',
  styleUrls: ['./register-btn.component.css']
})
export class RegisterBtnComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onWantToRegister(){
    this.router.navigateByUrl('/register')
  }
}
