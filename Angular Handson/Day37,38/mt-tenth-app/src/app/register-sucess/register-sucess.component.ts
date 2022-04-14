import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-register-sucess',
  templateUrl: './register-sucess.component.html',
  styleUrls: ['./register-sucess.component.css']
})
export class RegisterSucessComponent implements OnInit {
    userId: number | undefined = undefined;

  constructor(private _ar : ActivatedRoute ) { }

  ngOnInit(): void {
    this._ar.params.subscribe((p:Params) => {
      this.userId = p ['uid'];
    });
  }
  
}
