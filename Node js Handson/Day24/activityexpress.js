let fs = require("fs");
let express = require("express");
let app = express();
let data = fs.readFileSync("employee.txt");
let empInfo = data.toString();
let employee = empInfo.split(";");
let [Id ,name , salary] = employee;

app.listen(3003 , () => console.log(`sever is running at 3003`));
app.get('/employee', (request , response) =>{
    let employee = {
        Id , name , salary
    }
    response.json(employee);
});

