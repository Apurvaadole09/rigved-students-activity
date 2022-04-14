import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { UserService   } from '../user.service';




@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  obj:any | undefined=undefined
  constructor(private builder : FormBuilder, private service : UserService  ) { }

  ngOnInit(): void {
  }
  userId:FormControl=new FormControl('')

  userForm :FormGroup= this.builder.group({
    userId:[''],name : [''] , gender : [''] , phoneNo : [''] , emailid: [''],
    address : this.builder.group({
     state: [''] , city : [''] , pin : ['']
    }),
  });
  setInfoValue(){
    this.userForm.controls['userId'].setValue(this.obj.PrId);
    this.userForm.controls['name'].setValue(this.obj.Name);
    this.userForm.controls['gender'].setValue(this.obj.Gender);
    this.userForm.controls['PhoneNo'].setValue(this.obj.PhNo);
    this.userForm.controls['emailid'].setValue(this.obj.Email);
    this.userForm.controls['address'].get('state')?.setValue(this.obj.address.state);
    this.userForm.controls['address'].get('city')?.setValue(this.obj.address.city);
    this.userForm.controls['address'].get('pin')?.setValue(this.obj.address.pin);
  }

    updateForm(){
      console.log(this.userForm.value)
      this.service.update(this.userForm.value)
    }
  
    getInfo(){
      this.obj=this.service.update(this.userId.value)
      console.log(this.obj)
    }
}
