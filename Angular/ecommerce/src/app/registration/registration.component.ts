import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user!:User;
  public userService:UserService;
  public isRegistration!:boolean;

  constructor(userService:UserService) { 
    this.userService = userService;
    this.doHome();
  }

  ngOnInit(): void {
  }

  doRegister() {
    this.userService.save(this.user).subscribe((user:User) => {
      this.isRegistration = false;
    })
  }

  doHome() {
    this.user = new User(0, "", "", "", "");
    this.isRegistration = true;
  }

}
