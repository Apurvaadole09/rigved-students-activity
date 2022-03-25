let express = require("express");
let app = express();
let PORT = 3002
app.listen(PORT ,() =>{console.log(`Express is running at ${PORT}`)});
app.get('/',(request , response) => {
    response.send('requesting GET');
});
app.post('/',(request , response) =>{
    response.send('requesing POST');
});
app.put('/',(request , response) => {
    response.send('requesting PUT');
});
app.delete('/',(request , response) => {
    response.send('requesting DELETE');
});