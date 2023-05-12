import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit, OnDestroy {

  public now:Date;
  public setIntervalHandler:any;

  constructor() { 
    this.now = new Date();
  }

  ngOnInit(): void {
    this.setIntervalHandler = setInterval(() => {
      this.now = new Date();
    }, 100)
  }

  ngOnDestroy(): void {
    clearInterval(this.setIntervalHandler);
  }
}
