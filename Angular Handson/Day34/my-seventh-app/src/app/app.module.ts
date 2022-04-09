import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { TdfValidationDemoComponent } from './tdf-validation-demo/tdf-validation-demo.component';
import { Validation2Component } from './validation2/validation2.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfDemoComponent,
    TdfValidationDemoComponent,
    Validation2Component,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
