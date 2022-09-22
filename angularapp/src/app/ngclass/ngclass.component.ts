import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  people:any[] = [
    {'name': "Jack", 'country': "UK"},
    {'name': "John", 'country': "USA"},
    {'name': "Roony", 'country': "HK"},
    {'name': "Max", 'country': "UK"},
    {'name': "Surya", 'country': "USA"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
