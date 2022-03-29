let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");

let app = express();
let dbURL = "mongodb://localhost:27017";
let PORT = 3001;
app.listen(PORT , () => 
    console.log(`Server running at ${PORT}`));
    app.use(parser.json());
    app.use(cors());
//Getting all the documents
app.get("/users" , (request , response) => {
    mongoClient.connect(dbURL , {useNewUrlParser:true} , (error , client) => {
        if (error)
           throw error;
        let db = client.db("mydb");
        let cursor = db.collection("document").find();
        let users = []; 
        cursor.forEach((doc , err) => {
            if (err)
                throw err;
            users.push(doc);
        } , () => {
            response.json(users);
            client.close();
              
        });  
    });
});    
//Getting single document based on id
app.get("/users/:id" , (request , response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL , {useNewUrlParser:true} , (error , client) => {
        if(error)
           throw error;
        let db = client.db("mydb");
        db.collection("document").findOne({_id:id})
        .then ((doc) => {
            if (doc != null) {
                response.json(doc);
            }else{
                response.status(404).json({"message": `sorry ${id} dosen't exist`})
            }
            client.close();
        });   
    });
});
//Storing the document
app.post("/users" , (request , response) => {
    let userDocument = request.body;
    mongoClient.connect(dbURL , {useNewUrlParser:true} , (error , client) => {
        if(error)
           throw error;
        let db = client.db("mydb");
        db.collection("document").insertOne(userDocument , (err , res) => {
            if (err){
                response.status(409).json({"message" : `user with an id ${userDocument._id} exists`});
            }    
                response.status(201).json(res);
                client.close();
            });   
    });
});
//Deleting a document based on the id
app.delete("/users/:id" , (request , response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL , {useNewUrlParser:true} , (error , client) => {
        if (error)
           throw error;
        let db = client.db("mydb");
        db.collection("document").deleteOne({_id:id})
        .then ((doc) => {
            response.json(doc);
            client.close();
        });   
    });
});
//Updating the salary in the document using id
app.put("/users/:id/:salary" , (request , response) => {
    let id = parseInt(request.params.id);
    let salaryNew = parseInt(request.params.salary);
    mongoClient.connect(dbURL , {useNewUrlParser:true} , (error , client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        db.collection("document").updateOne({_id:id} , {$set:{Salary : salaryNew}})   
        .then ((doc) => {
            response.json(doc);
            client.close();
        }); 
    });
});