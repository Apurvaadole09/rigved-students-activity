let fs = require("fs");

let employee = {id:01 , name:"Alex" , salary:35000};
let jsonString = JSON.stringify(employee);
console.log(employee);
console.log(jsonString);

fs.writeFileSync('employee.json',jsonString);
console.log('Done...');