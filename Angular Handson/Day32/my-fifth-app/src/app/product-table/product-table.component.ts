import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   rowspanValue1 = 4;
   rowspanValue2 = 4;
}
