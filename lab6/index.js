const Express = require("express");
const App = Express();
const port = 80;

//colors for coolness
const chalk = require("chalk");
//pokemon to catch
const pokemons = require("json-pokemon");


//be specific
App.get("/", Express.static("client/build"));

//route: "/id/:id"
App.get("/id/:id", (req, res) => {
    //est id
    let pokeId = req.params.id;
    let result = {"error" : "Errors are occuring, ya screwed!"};
    pokemons.forEach((value) => {
        
        if(value.id == pokeId){
            //valid route
            result = value;
        }
    });
if (result.error) {
    console.log(chalk.red(req.path));
} else {
    console.log(chalk.green(req.path));
}
    res.send(result); 
});

//route: "/name/:name"
App.get("/name/:name", (req, res) => {
    //est name
    let pokeName = req.params.name;
    let result = {"error" : "Unregistered Pokemon, ya faker!"};

    pokemons.forEach((value) => {
        if(value.name.toLowerCase() == pokeName){
            //valid route
            result = value;
        } 
    });

    if (result.error) {
        console.log(chalk.red(req.path));
    } else {
        console.log(chalk.green(req.path));
    }
        res.send(result); 
});

App.listen(port, () => {
    console.log ("Got 99 errors but a running server ain\'t one of them!");
});