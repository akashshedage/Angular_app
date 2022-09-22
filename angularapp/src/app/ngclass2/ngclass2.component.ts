import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass2',
  templateUrl: './ngclass2.component.html',
  styleUrls: ['./ngclass2.component.css']
})
export class Ngclass2Component implements OnInit {

  employee:any[] = [
    {'Name': "Jack", 'EmpId': 1001, 'Company': "TCS", 'Designation':"Angular Developer", 'Salary': 50000, 'Location': "Pune" },
    {'Name': "Max", 'EmpId': 1002, 'Company': "Infosys", 'Designation':"React Developer", 'Salary': 70000, 'Location': "Mumbai" },
    {'Name': "Rooney", 'EmpId': 1003, 'Company': "TCS", 'Designation':"Java Developer", 'Salary': 45000, 'Location': "Pune" },
    {'Name': "Denial", 'EmpId': 1004, 'Company': "HCL", 'Designation':"UI Developer", 'Salary': 80000, 'Location': "Mumbai" },
    {'Name': "John", 'EmpId': 1005, 'Company': "Infosys", 'Designation':"Full Stack Developer", 'Salary': 100000, 'Location': "Delhi" },
    {'Name': "Smith", 'EmpId': 1006, 'Company': "Wipro", 'Designation':"Front End Developer", 'Salary': 85000, 'Location': "Kolkata" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
