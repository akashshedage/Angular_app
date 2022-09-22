import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  name: string = "Codemind";
  description : string = "This is angular data binding example";
  imageUrl = 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/Copy-of-Copy-of-Travel-Photography.png';
  lastName : string = "Surya";
  constructor() { }

  ngOnInit() {
  }

  // show() {
  //   alert('Method called')
  // }
   show(event:any) {
    console.log('event' ,event);
    
  }


}
