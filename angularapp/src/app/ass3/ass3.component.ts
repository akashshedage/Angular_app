import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {

  @Input() abc:string;
  constructor() { }

  ngOnInit() {
    console.log(this.abc);
  }

  a=[];
  show(val)
  {
    this.a.push(val.value)
    val.value=" ";
   
  }
 del(v)
 {
this.a.splice(v,1)
 }
}
