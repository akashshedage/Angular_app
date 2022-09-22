import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  @Input() data : string;
  constructor() { 
    console.log("constructor called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
    
  }
  ngAfterViewInit() : void{
    console.log("ngAfterViewInit called");

  }
  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked called");
  }
  ngAfterContentInit(): void{
    console.log("ngAfterContentInit called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    
  }

  ngOnChanges( changes: SimpleChanges): void {
    console.log("ngOnChanges called", changes);
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
}
