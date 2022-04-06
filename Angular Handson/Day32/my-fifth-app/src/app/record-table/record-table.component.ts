import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {
    
  }
  array:any=
  [
    {rollno:"01" , name:"Ajay" , marks:40},
    {rollno:"02" , name:"Vijay" , marks:20},
    {rollno:"03" , name:"Sanjay" , marks:30},
    {rollno:"04" , name:"Sachin" , marks:80},
    {rollno:"05" , name:"Ramesh" , marks:60}
  ]
}
