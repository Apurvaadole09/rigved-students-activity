import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation2',
  templateUrl: './validation2.component.html',
  styleUrls: ['./validation2.component.css']
})
export class Validation2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(formValue: any) : void{
     console.log(formValue);
  }
}
