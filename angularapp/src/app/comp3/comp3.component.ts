import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(){
    alert("Hello")
  }
  name: string = "Akash";
  imgUrl = 'https://wallpaperaccess.com/full/1338355.jpg';

}
