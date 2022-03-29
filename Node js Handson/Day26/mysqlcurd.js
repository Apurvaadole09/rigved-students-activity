let express = require("express");
let cors = require("cors");
let mysql= require("mysql2");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.json());
let mysqlConnection  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Appu#1234',
    database:'rigved_db',
   
});
let PORT = 3000;
mysqlConnection.connect((error) => {
    if (!error) {
    console.log(`Connected`);
    }   
    else 
    {
        console.log(`Connection failed`);
    }
});
app.listen(PORT , () => 
    console.log(`Server running at ${PORT}`));
    app.use(bodyParser.json());
    app.use(cors());
//Getting all employees
    app.get('/employee', (req, res) => {
        mysqlConnection.query('SELECT * FROM employee', (error, rows, fields) => {
            if (!error)
                res.send(rows);
            else
                console.log(error);
        })
    });
//Getting Single employee
app.get('/employee/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [req.params.id], (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
    })
});
//Deleting Employee based on id
app.delete('/employee/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM employee WHERE id = ?', [req.params.id], (error, rows, fields) => {
        if (!error)
            res.send('Deleted');
        else
            console.log(error);
    })
});
//Updating Employee table
app.put('/employee', (req, res) => {
    mysqlConnection.query('UPDATE `employee` SET `name`=?,`salary`=?, where `id`=?', [req.body.name,req.body.salary, req.body.id],(error, rows, fields) => {
        if (!error) 
          res.send('Updated');
        else  
          console.log(error);
     })
 });