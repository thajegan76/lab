import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements AfterViewInit {

  public title:string;
  public greetingTime:Date;

  @ViewChild(GreetingComponent)
  public greetingComponent!:GreetingComponent;

  constructor() { 
    this.title = "Online Bazzar";
    this.greetingTime = new Date();
  }

  ngAfterViewInit(): void {
    this.greetingTime = this.greetingComponent.now;
  }

}
