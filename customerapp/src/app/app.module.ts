import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }from '@angular/forms';
import { HttpModule }from '@angular/http';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerService }from './customer.service'


@NgModule({
  declarations: [
    AppComponent,
    CustomerCardComponent,
    CustomerGridComponent,
    CustomerComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: 
  [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
