import { Component, OnInit ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-cart',
  templateUrl: './child-cart.component.html',
  styleUrls: ['./child-cart.component.css']
})
export class ChildCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {name:'Laptop', price:52000},
    {name:'Mobile', price:30000},
    {name:'Gyser', price:50000}
  ]
  @Output()
  data:EventEmitter<number>=new EventEmitter<number>();
  counter=0;

  @Output()
  price1:EventEmitter<number>=new EventEmitter<number>();
  p1=0;

  
  add(price:number):void{
    
    this.p1=this.p1+price ;
    this.price1.emit(this.p1);
    this.counter=this.counter+1;
    this.data.emit(this.counter);
  }
  rmv(price:number):void{
    this.p1=this.p1-price;
    this.price1.emit(this.p1);
    this.counter=this.counter-1;
    this.data.emit(this.counter);
  }


}
