import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    name : string = "Alex";
    id : number = 10;
    salary : number = 35000;
  constructor() { }

  ngOnInit(): void {
  }

}
