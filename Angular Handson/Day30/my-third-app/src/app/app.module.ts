import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe';
import { FirstComponent } from './first/first.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { EmployeeComponent } from './employee/employee.component';
import { TableComponent } from './table/table.component';
import { SaluationPipe } from './saluation-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeDemoComponent,
    CustomPipe,
    StructuralDemoComponent,
    EmployeeComponent,
    TableComponent,
    SaluationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
