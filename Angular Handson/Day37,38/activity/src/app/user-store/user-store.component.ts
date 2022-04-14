import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private builder : FormBuilder , private service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  userForm :FormGroup= this.builder.group({
    userId:[''],name : [''] , gender : [''] , phoneNo : [''] , emailid: [''],
    address : this.builder.group({
     state: [''] , city : [''] , pin : ['']
    }),
  });
  saveForm() {
    this.service.save(this.userForm.value);
    this._router.navigate(["success" , this.userForm.value.userId]);
  }
}
