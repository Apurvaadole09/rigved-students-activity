const { Console } = require("console");
let express = require("express");
let app = express();
let PORT = 3000;
app.listen(PORT ,() => console.log(`sever running at ${PORT}`));
app.get('/user/:userId/:username' , (req , res) => {
    let userId = req.params.userId;
    let username = req.params.username;
    let user = {id: userId , name:username};
    res.json(user);
});
app.post('/user/:userId/:username' , (req , res) => {
    let userId = req.params.userId;
    let username = req.params.username;
    console.log(`Id =${userId} , Name=${username} `);
    res.send(`called post method`);
});