class calci {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    addition() {
        return (this.x + this.y);
    }
    findMin(...i){
        let temp = i[0];
        i.forEach((item)=>{
            if (item < temp){
            temp = item ; 
            }
        });
        return temp;
    }
}
let c1 = new calci (20,30);
let r = c1.addition();
console.log(`Result: ${r}`);
let min = c1.findMin(20,10,-3,-4);
console.log(`Min value is : ${min}`);