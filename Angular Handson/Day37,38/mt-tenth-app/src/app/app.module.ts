import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserstoreComponent } from './userstore/userstore.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSucessComponent } from './register-sucess/register-sucess.component';

let route : Routes = [
  {path : "" , component:UserstoreComponent},
  {path:"store" , component:UserstoreComponent},
  {path:"userList" , component:UserListComponent},
  {path:"delete" , component:UserdeleteComponent},
  {path:"sucess/uid",component:RegisterSucessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserstoreComponent,
    UserdeleteComponent,
    RegisterSucessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
