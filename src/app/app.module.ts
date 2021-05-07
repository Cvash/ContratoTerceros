import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {MatButtonToggleModule} from '@angular/material/button-toggle';
=======

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

>>>>>>> main
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    
=======
    TableComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
=======
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
>>>>>>> main
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { };
