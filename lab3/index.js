const Express = require("express");
const App = Express();
const port = 8080;

//doesnt work
App.get("/", (req, res) => {
    res.send("Hello World");
});

App.get("/public", (req, res) => {
    res.send("./public/index.html");
});

App.listen(port, function(){
    console.log ("Server running");
});