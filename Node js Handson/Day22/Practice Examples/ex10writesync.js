let fs = require("fs");
let message = "Hello everyone this is my second message\n";
fs.writeFileSync("message.txt" , message,{flag:'a+'});
console.log("Done....")