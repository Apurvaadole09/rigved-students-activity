import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  profile:any;
  constructor(private builder : FormBuilder ) { 
    this.profile  = this.builder.group({
      firstname: ['',Validators.compose ([Validators.minLength(3) , Validators.required])],
      lastname: ['',Validators.compose ([Validators.minLength(3) , Validators.required])],
      address :this.builder.group({
        state: ['',Validators.required],
        city: ['',Validators.required],
        pin: ['',Validators.required],
        
      }),
    });
  }

  ngOnInit(): void {
  }
  
   handleSubmit() {
    console.log(this.profile.value);
  
    this.profile.reset({})
  }
}
