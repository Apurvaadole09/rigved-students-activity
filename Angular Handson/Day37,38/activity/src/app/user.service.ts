import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userArray : any[] = [];
  constructor() { }

  public getUsers() : any [] {
    return this.userArray;
  }

  public save(obj :any) : void {
    let b = this.userArray.length;
    let a = b + 1
    let object = { userId: a, name: obj.name, gender: obj.gender, PhoneNo: obj.PhoneNo, emailid: obj.emailid, address: { state: obj.address.state, city: obj.address.city, pin: obj.address.pin } };
    this.userArray.push(obj);
  }
  public delete(id : number) : void {
    for (let i = 0 ;i < this.userArray.length ; i++) {
      let user = this.userArray[i];
      if (user.userId == id) {
        this.userArray.splice(i , 1);
      }
    }
  }
  public update(obj: any): void {
    for (let i = 0; i < this.userArray.length; i++) {
      let user = this.userArray[i];
      if (user.userId == obj.userId) {
        user.name = obj.name;
        user.gender = obj.gender;
        user.PhoneNo = obj.PhoneNo;
        user.emailid = obj.emailid;
        user.address.state = obj.address.state;
        user.address.city = obj.address.city;
        user.address.pin = obj.address.pin;
        console.log('Updateing form')
      }
    }
  }
      
  
}