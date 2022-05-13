import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public name="";
display=true;
colour="green";
text = 'default value';
public colors=["red","blue","green","yellow"]
  constructor() { }

  ngOnInit() {
  }
  keyup(value) {
    this.text = value;
  }

}