import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { RecordTableComponent } from './record-table/record-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    RecordTableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
