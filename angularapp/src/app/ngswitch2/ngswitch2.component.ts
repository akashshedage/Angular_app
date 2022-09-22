import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch2',
  templateUrl: './ngswitch2.component.html',
  styleUrls: ['./ngswitch2.component.css']
})
export class Ngswitch2Component implements OnInit {

  selectedProduct: string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(value){
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }
}
