import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';



const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppComponent,
    EmployeeComponent,
    BrowserModule,
    FormsModule
  ],

   declarations:[
  
 

  ],
 providers:[],


})
export class AppModule { }
