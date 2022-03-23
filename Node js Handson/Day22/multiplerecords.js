let fs = require("fs");
let read = require("readline-sync");

let id = read.question("Enter Your Id : ");
let name = read.question("Enter Your Name : ");
let salary = read.question("Enter Your Salary : ");


let obj = Object.assign({id,name, salary});
let jsonString = JSON.stringify(obj);

let data = fs.readFileSync(`records.json`).toString();

if(data.endsWith('}]')==true){
    let data1= data.slice(0,(data.length-1))
    let data2= `${data1},\n${jsonString}]`
    fs.writeFileSync(`records.json`,data2);
    console.log('Done...')
}
else{
    let data2 =`[${jsonString}]`
    fs.writeFileSync('records.json',data2);
    console.log('Done...');
    
}
