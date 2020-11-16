import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homeUrl = window.location.origin
  logoUrl = "../../assets/logo-white.png"

  loggedIn = AuthService.isLoggedIn()
  loggedOut = !AuthService.isLoggedIn()
  
  firstName = AuthService.firstName
  lastName  = AuthService.lastName
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.loggedIn= false
    this.loggedOut= true
  }
  onGoToHomePage(){
    this.router.navigateByUrl('/')
  }
}
