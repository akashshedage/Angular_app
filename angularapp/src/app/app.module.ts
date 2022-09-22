import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Ngswitch2Component } from './ngswitch2/ngswitch2.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustdirDirective } from './custdir.directive';
import { Ngclass2Component } from './ngclass2/ngclass2.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { Ass3Component } from './ass3/ass3.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    NgforComponent,
    NgswitchComponent,
    Ngswitch2Component,
    NgstyleComponent,
    NgclassComponent,
    CustdirDirective,
    Ngclass2Component,
    ChildComponent,
    Child2Component,
    LifecyclehooksComponent,
    Ass3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
