import { Component, OnInit ,Input} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userId 
  profilePic
  user
  @Input() firstName
  @Input() lastName
  userLoaded:Promise<boolean>
  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUser(this.userId)
    .subscribe((result:any) =>{
      this.user = result.data
      this.userLoaded = Promise.resolve(true)
      //console.log('user',this.user)
    })
  }

}
