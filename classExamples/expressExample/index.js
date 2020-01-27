const Express = require("express");
const App = Express();
const port = 8080; //8080 is used as a development server

const Person = require("./Person.js");
    let p = new Person("Jenny", "Blue");

    //let db = [5, 24, 25, 16];

App.get("/", (Request, Response) => {
    //Response.send("Hi");
    //Response.send("<p>Hi</p>");
    //Response.json({"db": db[1]}); 
    // valuable because js understands json. if everything is using the same language its easy to understand, going from object notation to an object
    // can send text, html, or json

    Response.send(p.name); //Response.send(p); returns json of all values {"name":"Jenny","color":"Blue"}
});

App.get("/book", function(Request, Response) {
    Response.send("Book");
}); //told it to listen for a different route
    //localhost:8080/book

App.listen(port, function(){
    console.log ("Server running");
}); 

//must be exact and give it all the instructions and then demand answers