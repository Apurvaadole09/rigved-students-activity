let mongoose = require("mongoose");
let dbURL = "mongodb://localhost:27017/mydb";
mongoose.connect(dbURL);
let db = mongoose.connection;
 db.once('open' ,() => {
     console.log(`connected to mongodb`);
 });