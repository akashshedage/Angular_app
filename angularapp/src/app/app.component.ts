import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  condition:boolean = false;
  title = 'angularapp';
  fromParenttochild = 'I am from parent component';
  emp= [
    {Name: "Jack", EmpId: 1001, Company: "TCS", Designation:"Angular Developer", Salary: 50000, Location: "Pune" },
    {Name: "Max", EmpId: 1002, Company: "Infosys", Designation:"React Developer", Salary: 70000, Location: "Mumbai" },
    {Name: "Rooney", EmpId: 1003, Company: "TCS", Designation:"Java Developer", Salary: 45000, Location: "Pune" },
    {Name: "Denial", EmpId: 1004, Company: "HCL", Designation:"UI Developer", Salary: 80000, Location: "Mumbai" },
    {Name: "John", EmpId: 1005, Company: "Infosys", Designation:"Full Stack Developer", Salary: 100000, Location: "Delhi" },
    {Name: "Smith", EmpId: 1006, Company: "Wipro", Designation:"Front End Developer", Salary: 85000, Location: "Kolkata" }
  ];
  value: any;

  GetValueFromChild(value){
    console.log(value);
  }

  GetValuepro(value){
    console.log(value);
  }

  submitValue(val){
    this.value = val.value;
  }
}
