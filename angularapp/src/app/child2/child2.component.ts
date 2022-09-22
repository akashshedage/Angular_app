import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() employee: [];

  pro : product []=[
    {Name: "Mustard Oil ", ProductId: 1001, Company: "Fortune", Price: 150},
    {Name: "Active Oil ", ProductId: 1002, Company: "Fortune", Price: 200},
    {Name: "Rice Bran Oil ", ProductId: 1003, Company: "Fortune", Price: 250},
    {Name: "Soya Health Oil ", ProductId: 1004, Company: "Fortune", Price: 300}
  ];
  @Output() childOutput : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.employee);
    this.childOutput.emit(this.pro)
  }

  senddata(){
    this.childOutput.emit(this.pro);
  }
}

class employee{
  Name: string;
  EmpId: number;
  Company: string;
  Designation: string;
  Salary: number;
  Location: string;
}

class product{
  Name: string;
  ProductId: number;
  Company: string;
  Price: number;
}