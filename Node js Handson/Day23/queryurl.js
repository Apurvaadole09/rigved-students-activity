let http = require("http");
let url = require("url");
let fs = require("fs");
let PORT_NO = 3001;

http
.createServer((request , response)=>{
    let urlString = request.url;
    if (urlString != '/favicon.ico') {
        
        let urlObject = url.parse(urlString , true);
        let user2 = urlObject.query;
        let data=fs.readFileSync('user2.json');
        let dataString = data.toString();
        let jsArray = undefined;
        if(dataString.length < 1 || dataString == ""){
            jsArray = [];
        } else {
            jsArray = JSON.parse(dataString);
        }
        console.log(user2);
        console.log(JSON.stringify(user2));
        jsArray.push(user2);
   
       
        response.writeHead(200 ,{'content-type': 'text/html'});
        response.write(`<h2>Hello ${user2.name} your age is ${user2.age}<h2>`)
   
        let jsonArray = JSON.stringify(jsArray);
        fs.writeFileSync('user2.json',jsonArray);

    }
    response.end();
})
.listen(PORT_NO, () => console.log(`Server running at ${3001}`) );
