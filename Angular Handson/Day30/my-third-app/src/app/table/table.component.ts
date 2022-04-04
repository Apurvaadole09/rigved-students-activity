import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table:any;
  constructor() { }

  ngOnInit(): void {
    this.table=
    [
      {name:"Alex" , gender:"Male" , address:{state:"KA" , city:"BLR"}},
      {name:"Alia" , gender:"Female" , address:{state:"MH" , city:"MUM"}},
      {name:"David" , gender:"Male" , address:{state:"MH" , city:"PUN"}}
    ]
  }

}
