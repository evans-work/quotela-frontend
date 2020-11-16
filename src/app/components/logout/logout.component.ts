import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() logoutUser:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }
  onLogout(){
    this.logoutUser.emit()
    AuthService.logout()
  }

}
