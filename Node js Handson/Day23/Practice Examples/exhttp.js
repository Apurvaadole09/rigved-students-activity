let http = require("http");
let PORT_NO = 3001;

http.createServer(callback1).listen(PORT_NO , callback2);
function callback1 (request , response) {
    console.log(`callback1 is executed , request arrives`)
    response.write(`welcome to our first web app`);
    response.end();
}
function callback2(){
    console.log(`callback2 is executed , server started at ${PORT_NO}`)
}
