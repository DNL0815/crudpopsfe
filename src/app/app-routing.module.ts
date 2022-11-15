import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],

  // declarations:[AppComponent,],
  // bootstrap:[AppComponent]

  exports: [RouterModule]
})
export class AppRoutingModule { }
