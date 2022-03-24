let http= require("http");
let PORT_NO = 3001;
http
.createServer((request , response) => {
    let username = 'Alexander';
    response.writeHead(200 , {'content-type': 'text/html'});
    response.write(`<h2>Hello app</h2>`);
    response.write(`<h3>Username: ${username}</h3>`);
    response.end();
})
.listen(PORT_NO ,() => console.log(`server is running in ${PORT_NO}`));