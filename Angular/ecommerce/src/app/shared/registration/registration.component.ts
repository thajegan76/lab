import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user!:User;
  public userService:UserService;
  public isRegistration!:boolean;
  public message:string;

  constructor(userService:UserService) { 
    this.userService = userService;
    this.message = "";
    this.doHome();
  }

  ngOnInit(): void {
  }

  doRegister() {
    this.userService.save(this.user).subscribe({
      next: (user:User) => {
        this.isRegistration = false;
      },
      error: (error:any) => {
        this.message = error.error;
      }
    })
  }

  doHome() {
    this.user = new User(0, "", "", "", "");
    this.isRegistration = true;
  }

}
