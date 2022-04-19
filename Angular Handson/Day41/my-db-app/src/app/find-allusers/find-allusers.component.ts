import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-allusers',
  templateUrl: './find-allusers.component.html',
  styleUrls: ['./find-allusers.component.css']
})
export class FindAllusersComponent implements OnInit {
   users : any[] | undefined = undefined;
  constructor(private service : UserService) { }

  ngOnInit(): void {
  }
  handleClick() : void {
    this.service.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
