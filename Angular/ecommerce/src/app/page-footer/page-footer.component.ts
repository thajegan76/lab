import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent {

  public message:string;
  public currentDate:Date;

  constructor() { 
    this.message = "Copyright &copy; <b>My Company</b>";
    this.currentDate = new Date();
  }

}
