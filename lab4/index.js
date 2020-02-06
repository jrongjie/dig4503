const Express = require("express");
const App = Express();
const port = 80;

const pokemons = require("json-pokemon");
const pokemon = pokemons[0];

//Create the following routes: "/id/:id"
App.get("/id/:id", function(req, res){
    //Should return a JSON object matching the given Pokemon ID  or an error if the ID does not exist
    res.send(req.params.id);
});

//"/name/:name"
App.get("/name/:name", function(req, res){
    //Should return a JSON object matching the given Pokemon name or an error if the name does not exist
    res.send(req.params);
});
    
//All valid routes should print to the console the path requested in green. Any invalid routes that would return an error object should print to the console in red with the full path request.
    if(){
        //valid route
        console.log("path requested in green");
    } else {
        //invalid route
        //return error object
        console.log("full path request in red");
    }

App.listen(port, () => {
    console.log ("Server running");
})