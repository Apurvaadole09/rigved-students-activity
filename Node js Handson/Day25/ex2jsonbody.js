
let express =  require("express");
let app = express();
let parser = require("body-Parser");
const { response } = require("express");
let PORT = 3000;

app.listen(PORT , () => console.log(`server running at ${PORT}`));
app.use(parser.json());
app.post('/user' , (request , response) => {
    let content = request.body;
    console.log(content);
    response.send(`Hello , ${content.name} your age is : ${content.age}`);
});
app.post('/user/:id' , (request , response) => {
    let content = request.body;
    let id = request.params.id;
    console.log(id , content);
    let user = {userId : id , username: content.name , age: content.age};
    response.json(user);
});