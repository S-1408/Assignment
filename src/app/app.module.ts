import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { XComponent } from './dynamic/x/x.component';
import { YComponent } from './dynamic/y/y.component';
import { ArrayComponent } from './array/array.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DynamicComponent,
    XComponent,
    YComponent,
    ArrayComponent,

  ],
  imports: [

BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
