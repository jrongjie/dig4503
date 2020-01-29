//Create a express server()
const Express = require("express");
const App = Express();
const port = 80;

//Create a route ("/") that sends the string "Hello World!"
App.get("/", function(req, res){
    res.send("Hello World!");
});

//Create a route ("/public") that serves file from the public directory
App.use("/public", Express.static("public"));

App.listen(port, () => {
    console.log ("Server running");
});