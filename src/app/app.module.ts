import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Satandard1Component } from './student/satandard1/satandard1.component';
import { Satandard2Component } from './student/satandard2/satandard2.component';
import { Satandard3Component } from './student/satandard3/satandard3.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import {NavigationComponent} from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Satandard1Component,
    Satandard2Component,
    Satandard3Component,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
