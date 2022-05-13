import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public greeting="";
  display=false;
  constructor() { }

  ngOnInit() {
  }
  onclick(){
  this.greeting="welcome to greet"
  }
  logMessage(value){
    console.log(value);
  
   
  }

}