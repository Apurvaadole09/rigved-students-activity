let express = require("express");
let app = express();
app.listen(3003 , () => console.log('server is running at 3003'));
app.get('/' ,(request , response) => {
    response.send('Hello World');
});
app.get('/employee',(request , response)=> {
    let emp = {id:10 , name:"Vijay" , salary:35000};
    response.json(emp);
});
app.get('/employees', (request , response) => {
    let employeeArray = [
        {id:10 , name:"Vijay" , salary:35000},
        {id:20 , name:"Ajay" , salary:40000},
        {id:30 , name:"Raj" , salary:42000}
    ];
    response.json(employeeArray);
});